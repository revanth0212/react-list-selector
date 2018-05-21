// @flow

export type ListItemPropTypes = {
  id: number,
  disabled: boolean,
  primaryText: string | Node,
  secondaryText: string | Node,
  style: ?Object,
  onClick: (id: number) => void,
  hoverColor: string,
}

export type ListItemConfigType = {
  id: number,
  disabled: boolean,
  primaryText: string | Node,
  secondaryText: string | Node,
  style: ?Object,
  onClick: (id: number) => void,
}

export type ListContainerPropTypes = {
  listItems: Array<ListItemConfigType>,
  listItemHoverColor: string,
  style: ?Object,
}

export type ListSelectorViewPropTypes = {
  unSelectedList: Array<ListItemConfigType>,
  selectedList: Array<ListItemConfigType>,
  style: ?Object,
  disableHoverColor: boolean,
  unSelectedItemHoverColor: string,
  selectedItemHoverColor: string,
}

export type ListItemConfigWithoutOnClick = {
  id: number,
  disabled: boolean,
  primaryText: string | Node,
  secondaryText: string | Node,
  style: ?Object,
}

export type ListSelectorStateType = {
  unSelectedList: Array<ListItemConfigWithoutOnClick>,
  selectedList: Array<ListItemConfigWithoutOnClick>,
}

export type ListSelectorPropTypes = {
  unSelectedList: Array<ListItemConfigWithoutOnClick>,
  selectedList: Array<ListItemConfigWithoutOnClick>,
  style: ?Object,
  disableHoverColor: boolean,
  unSelectedItemHoverColor: string,
  selectedItemHoverColor: string,
  onSelectedItemClick: (item: ListItemConfigWithoutOnClick) => void,
  onUnselectedItemClick: (item: ListItemConfigWithoutOnClick) => void,
}
