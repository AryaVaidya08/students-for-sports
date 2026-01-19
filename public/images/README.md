# Images Directory

This directory is for storing image assets for the Students For Sports website.

## Placeholder Images Needed

- Team member photos:
  - `manas.jpg` (or `.png`)
  - `jadon.jpg` (or `.png`)
  - `mohnish.jpg` (or `.png`)

- Partner logos/images:
  - `alfreds-sports-shop.jpg` (or `.png`)
  - `sierra-house.jpg` (or `.png`)
  - `re-sports.jpg` (or `.png`)

- Other images:
  - Logo image (if available)
  - Hero banner image (optional)

## Usage

When adding images, reference them in your components like this:

```jsx
import Image from 'next/image';

<Image 
  src="/images/filename.jpg" 
  alt="Description" 
  width={200} 
  height={200}
/>
```
