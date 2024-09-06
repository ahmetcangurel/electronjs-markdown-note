import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'

export const MarkdownEditor = () => {
  return (
    <MDXEditor
      markdown="# Hello, world!"
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 
      prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 
      prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-coed:text-red-500 prose-code:before:content-[''] 
      prose-code:after:content-['']"
    />
  )
}

// {
//     name: 'emoji',
//     options: {
//       emoji: {
//         smile: '😊',
//         sad: '😢',
//         angry: '😠',
//         heart: '❤️',
//         thumbsup: '👍',
//         thumbsdown: '👎',
//         fire: '🔥',
//         star: '⭐️',
//         tada: '🎉',
//         rocket: '🚀',
//         eyes: '👀',
//         thinking: '🤔',
//         clap: '👏',
//         pray: '🙏',
//         muscle: '💪',
//         poop: '💩',
//         ghost: '👻',
//         money: '💰',
//         bomb: '💣',
//         rainbow: '🌈',
//         sun: '☀️',
//         moon: '🌙',
//         cloud: '☁️',
//         umbrella: '☔️',
//         snowflake: '❄️',
//         star2: '🌟',
//         zap: '⚡️',
//         cyclone: '🌀',
//         ocean: '🌊',
//         bamboo: '🎍',
//         gift: '🎁',
//         balloon: '🎈',
//         flag: '🚩',
//         fireworks: '🎆',
//         sparkles: '✨',
//         sparkling_heart: '💖',
//         dizzy: '💫',
//         boom: '💥',
//         speech_balloon: '💬',
//         thought_balloon: '💭',
//         zzz: '💤',
//         wave: '👋',
//         ok: '👌',
//         v: '✌️',
//         punch: '👊',
//         clap2: '👏',
//         muscle2: '💪',
//         pray2: '🙏',
//         heart2: '❤️',
//         heart3: '💛',
//         heart4: '💚'
//       }
//     }
//   }
