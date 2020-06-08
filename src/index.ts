import {
  workspace,
  ExtensionContext,
  commands,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
  RevealOutputChannelOn,
} from 'coc.nvim'

export function activate(context: ExtensionContext) {
  const serverModule = require.resolve('svelte-language-server/bin/server.js')
  const runtimeConfig = workspace.getConfiguration('svelte.language-server')

  // TODO: -1 should be default, which self selects open port
  // but that doesn't seem interesting to me, because setting the port
  // also enables the inspector
  const port = runtimeConfig.get<number>('port') ?? 6009
  const debugOptions = { execArgv: ['--nolazy', `--inspect=${port}`] }
  const runOptions = { execArgv: [`--inspect=${port}`] }
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc, options: runOptions },
    debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions },
  }

  // optionally set node exe to use
  const serverRuntime = runtimeConfig.get<string>('runtime')
  if (serverRuntime) {
    serverOptions.run.runtime = serverRuntime
    serverOptions.debug.runtime = serverRuntime
  }

  let clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'svelte' }],
    revealOutputChannelOn: RevealOutputChannelOn.Never,
    synchronize: {
      configurationSection: ['svelte'],
      fileEvents: workspace.createFileSystemWatcher('{**/*.js,**/*.ts}', false, false, false),
    },
    initializationOptions: { config: workspace.getConfiguration('svelte.plugin') },
  }

  let languageServer = createLanguageServer(serverOptions, clientOptions)
  context.subscriptions.push(languageServer.start())

  context.subscriptions.push(
    commands.registerCommand('svelte.restartLanguageServer', async () => {
      await languageServer.stop()
      languageServer = createLanguageServer(serverOptions, clientOptions)
      context.subscriptions.push(languageServer.start())
      await languageServer.onReady()
    }),
  )
}

function createLanguageServer(serverOptions: ServerOptions, clientOptions: LanguageClientOptions) {
  return new LanguageClient('svelte', 'Svelte', serverOptions, clientOptions)
}
