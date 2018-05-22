# react-list-selector

It is a Material UI based React Component that helps in selecting list of items from one list and placing them in the other.

Checkout the demo [here](https://revanth0212.github.io/react-list-selector/).

# Installation

npm install react-list-selector

# Usage

    import  ListSelector  from  'react-list-selector'

    <ListSelector
        ref={(node) => {
    	    this.listSeperator = node
        }}
        unSelectedList={unSelectedList}
        selectedList={selectedList}
        style={style}
        disableHoverColor={disableHoverColor}
        unSelectedItemHoverColor={unSelectedItemHoverColor}
        selectedItemHoverColor={selectedItemHoverColor}
    />

Make sure your app is wrapped inside `<MuiThemeProvider>` which you can import like this: `import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'`.

# Props

| Prop                       | Prop Type                                           | Default Value | isRequired | Description                                                                                                                    |
| -------------------------- | --------------------------------------------------- | ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `unSelectedList`           | `Array<ListItemConfig>`                             | []            | true       | List of items that will be shown in the un selected list.                                                                      |
| `selectedList`             | `Array<ListItemConfig>`                             | []            | true       | List of items that will be shown in the selected list.                                                                         |
| `disableHoverColor`        | `boolean`                                           | false         | false      | If set, will remove hover color from both the list items.                                                                      |
| `unSelectedItemHoverColor` | `string`                                            | ''            | false      | Hover color for un selected list items.                                                                                        |
| `selectedItemHoverColor`   | `string`                                            | ''            | false      | Hover color for selected list items.                                                                                           |
| `style`                    | `Obejct`                                            | {}            | false      | Style for each of the list containers.                                                                                         |
| `onUnselectedItemClick`    | `(item: ListItemConfig) => void`                    | `() => {}`    | false      | Will be called when an un selected item has been clicked.                                                                      |
| `onSelectedItemClick`      | `(item: ListItemConfig) => void`                    | `() => {}`    | false      | Will be called when a selected item has been clicked.                                                                          |
| `onClick`                  | `(item: ListItemConfig, selected: boolean) => void` | `() => {}`    | false      | Will be called when an item has been clicked. Returns the clicked item and also its new state, weather it was selected or not? |

# Functions

| Function Name       | Function Type                 | Description                            |
| ------------------- | ----------------------------- | -------------------------------------- |
| `getUnSelectedList` | `() => Array<ListItemConfig>` | Returns the list of un selected items. |
| `getSelectedList`   | `() => Array<ListItemConfig>` | Returns the list of selected items.    |

You can find the type of `ListItemConfig` from the next section.

You can call these functions using the ListSelector's `ref`.

# ListItemConfig

    type ListItemConfig = {
        id: number,
        disabled: ?boolean,
        primaryText: string | Node,
        secondaryText: ?string | Node,
        style: ?Object,
    }

| Key           | Default Value | isRequired | Description                                                      |
| ------------- | ------------- | ---------- | ---------------------------------------------------------------- |
| id            | 0             | true       | Unique value that will be used to identify the item in the list. |
| disabled      | false         | false      | If set, will disable on click on the item.                       |
| primaryText   | ''            | true       | Text or Node that will be rendered as in the item.               |
| secondaryText | ''            | false      | Secondary Text or Node that will be rendered as in the item.     |
| style         | {}            | false      | Custom styling that will be applied on the item.                 |
