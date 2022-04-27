# Plant-based Identification

### Question Format
- **type**
  - `selection` - multi-choice question w/ radio button responses
  - `text` - user-provided text answer
- **name**
  - maps to key in `profile` object, which is what's submitted to server
```
Type: selection

name: input name, formatted for header
values: input id, value, htmlFor in label, capitalized as label text

Ex.
{
  type: 'selection',
  name: 'flowerType',
  values: [
      'regular', 'irregular'
  ]
}

Type: text

name: input name, input id, htmlFor in label, formatted for header
label: text for the label, usually a question

Ex.
{
  type: 'text',
  name: 'pistilCount',
  label: 'How many?'
}
```