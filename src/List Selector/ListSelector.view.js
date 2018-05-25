// @flow

import React from 'react'

import ListContainer from './ListContainer'

import type { ListSelectorViewPropTypes } from './ListSelector.types'

const ListSelectorView = ({
  unSelectedList,
  selectedList,
  style,
  disableHoverColor,
  unSelectedItemHoverColor = 'red',
  selectedItemHoverColor = 'green',
  hideDivider,
}: ListSelectorViewPropTypes) => (
  <div style={{ display: 'inline-flex' }}>
    <ListContainer
      key="unSelectedList"
      listItems={unSelectedList}
      listItemHoverColor={disableHoverColor ? '' : unSelectedItemHoverColor}
      style={style}
      hideDivider={hideDivider}
    />
    <ListContainer
      key="selectedList"
      listItems={selectedList}
      listItemHoverColor={disableHoverColor ? '' : selectedItemHoverColor}
      style={style}
      hideDivider={hideDivider}
    />
  </div>
)

export default ListSelectorView
