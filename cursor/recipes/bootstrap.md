# Bootstrap Vonga Context

Run this first in Cursor's Agent Mode:



```

Run recipe: /cursor/prompts/connect-gpt-and-cursor.md

```



Then execute your next task, e.g.:



```

Run recipe: /cursor/recipes/implement-page.md

with:

  path=/src/app/page.tsx

  copy_source_files=/docs/brand-system.md,/docs/web-style-guide.md

```



The agent should confirm:

> "Context loaded: Vonga brand system active."



Once confirmed, Cursor will behave with the same context as ChatGPT.
