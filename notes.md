# shell

```shell
# Start a git repo
git init
# install node packages
npm i
# How to change the node version
# 1. Verify active node version
node -v
# 2. Switch to a different version if necessary:
nvm use 14.17.0
# Troubleshoot npm run dev exits
# 1. reinstall Node modules
rm -rf node_modules
npm install
```

# React notes

# Next notes

```javascript
'use client';
```

```javascript
// Optimise images. Dimensions - these should be an aspect ratio identical to the source image.
import Image from 'next/image';
```

```markdown
`layout` wraps the app.
`page`
```

Maybe some autocomplete shortcuts?

Some core components:

```javascript
// CSS Modules
import styles from '@/app/ui/home.module.css';
// Client-side navigation - avoids page reloads in navs
import Link from 'next/link';
// Fonts
import { lusitana } from '@/app/ui/fonts';
// Image
import Image from 'next/image';
```

Extension: next.nav

# Vercel db

Create github repo

# Dev tools debugging

```shell

```

```javascript
// For imports relative URLs from root of project
import '@/app/....';


// CLSX - conditional stylling
<span
    className={clsx(
    // base styles
    'inline-flex items-center rounded-full px-2 py-1 text-xs',
    {
    // conditional styles
        'bg-gray-100 text-gray-500': status === 'pending',
        'bg-green-500 text-white': status === 'paid',
    },
    )}
>
// CSS modules (home.module.css)
// Styled components
```

## tabs open

Github
Vercel
