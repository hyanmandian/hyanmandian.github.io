---
tags: blog
title: Maecenas et fermentum tortor
layout: post
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis mauris, rutrum ac interdum et, tempus eu nibh. Suspendisse ligula nunc, eleifend eget commodo id, fringilla et magna. Nam risus orci, placerat fermentum ex quis, bibendum volutpat sem. Fusce in dui metus. Curabitur dictum enim erat, vel posuere mi mattis vitae. Integer commodo sapien mauris, ac consequat nulla sollicitudin sit amet. Vivamus a efficitur nibh. Nullam vitae justo cursus, porttitor nulla eu, sollicitudin ex. Nam eu semper lectus, sit amet porttitor ante. Suspendisse consectetur sit amet ligula et dignissim. Nam efficitur tempor lorem sed dictum. Sed at vestibulum enim. Aliquam interdum enim turpis, in interdum mauris posuere nec.

Vestibulum et diam eu nisl facilisis faucibus. Pellentesque turpis odio, pharetra ac porta eu, efficitur vel mauris. Nullam pretium ut enim fringilla consequat. Aenean id sollicitudin est, id sagittis libero. Nam sed magna et tortor ultricies ullamcorper. Quisque hendrerit rhoncus nisi, hendrerit venenatis lectus ultricies vel. Nullam quis mollis magna, non sagittis mauris.

```typescript
export function format(cpf: string | number, options: FormatCpfOptions = {}): string {
  let digits = onlyNumbers(cpf);

  if (options.pad) {
    digits = digits.padStart(LENGTH, '0');
  }

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, i) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(i, digits)) {
        if (DOT_INDEXES.indexOf(i) >= 0) return `${result}.`;
        if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}
```

Suspendisse auctor lectus a mollis luctus. Sed porta turpis et vulputate rhoncus. Donec dui nulla, pharetra vel efficitur vitae, facilisis in odio. Donec et mattis velit, at ultrices urna. Nam eu erat iaculis, vehicula mauris ac, placerat velit. Morbi eget gravida leo. Donec imperdiet interdum tempor. Maecenas non orci semper, ornare magna sed, aliquam nulla. Nulla et mauris rutrum, blandit lacus id, ultrices odio. Ut semper maximus odio quis auctor. Vestibulum urna nibh, ultrices sed maximus nec, suscipit quis quam. Nam eu viverra quam. Maecenas et fermentum tortor.
