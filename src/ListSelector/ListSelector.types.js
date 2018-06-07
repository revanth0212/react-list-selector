// @flow

import React from 'react'

export type ListItemPropTypes = {
  id: number,
  disabled?: boolean,
  primaryText: string | Node,
  secondaryText?: string | Node,
  style: ?Object,
  onClick: (id: number) => void,
  hoverColor: string,
}

export type ListItemConfigType = {
  id: number,
  disabled?: boolean,
  primaryText: string | Node,
  secondaryText?: string | Node,
  style?: Object,
  onClick: (id: number) => void,
}

export type ListContainerPropTypes = {
  listItems: Array<ListItemConfigType>,
  listItemHoverColor: string,
  style?: Object,
  hideDivider: boolean,
  hideBulkUpdateButton: boolean,
  bulkUpdateButton: React.Element,
}

export type ListSelectorViewPropTypes = {
  unSelectedList: Array<ListItemConfigType>,
  selectedList: Array<ListItemConfigType>,
  style: Object,
  disableHoverColor: boolean,
  unSelectedItemHoverColor: string,
  selectedItemHoverColor: string,
  hideDivider: boolean,
  hideBulkUpdateButtons: boolean,
  selectAllButton: React.Element,
  unSelectAllButton: React.Element,
}

export type ListItemConfigWithoutOnClick = {
  id: number,
  disabled?: boolean,
  primaryText: string | Node,
  secondaryText?: string | Node,
  style?: Object,
}

export type ListSelectorStateType = {
  unSelectedList: Array<ListItemConfigWithoutOnClick>,
  selectedList: Array<ListItemConfigWithoutOnClick>,
}

export type ListSelectorPropTypes = {
  unSelectedList: Array<ListItemConfigWithoutOnClick>,
  selectedList: Array<ListItemConfigWithoutOnClick>,
  style: Object,
  disableHoverColor: boolean,
  unSelectedItemHoverColor: string,
  selectedItemHoverColor: string,
  onSelectedItemClick: (item: ListItemConfigWithoutOnClick) => void,
  onUnselectedItemClick: (item: ListItemConfigWithoutOnClick) => void,
  onClick: (item: ListItemConfigWithoutOnClick, selected: boolean) => void,
  hideDivider: boolean,
  hideBulkUpdateButtons: boolean,
  SelectAllButton: React.Element,
  UnSelectAllButton: React.Element,
  onSelectAllClick: () => void,
  onUnSelectAllClick: () => void,
}
