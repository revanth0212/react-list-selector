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
}: ListSelectorViewPropTypes) => (
  <div style={{ display: 'inline-flex' }}>
    <ListContainer
      key="unSelectedList"
      listItems={unSelectedList}
      listItemHoverColor={disableHoverColor ? '' : unSelectedItemHoverColor}
      style={style}
    />
    <ListContainer
      key="selectedList"
      listItems={selectedList}
      listItemHoverColor={disableHoverColor ? '' : selectedItemHoverColor}
      style={style}
    />
  </div>
)

export default ListSelectorView
