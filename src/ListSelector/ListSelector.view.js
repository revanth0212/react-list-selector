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
  hideBulkUpdateButtons,
  selectAllButton,
  unSelectAllButton,
}: ListSelectorViewPropTypes) => (
  <div style={{ display: 'inline-flex' }} className="listSelector">
    <ListContainer
      key="unSelectedList"
      listItems={unSelectedList}
      listItemHoverColor={disableHoverColor ? '' : unSelectedItemHoverColor}
      style={style}
      hideDivider={hideDivider}
      bulkUpdateButton={selectAllButton}
      hideBulkUpdateButton={hideBulkUpdateButtons}
    />
    <ListContainer
      key="selectedList"
      listItems={selectedList}
      listItemHoverColor={disableHoverColor ? '' : selectedItemHoverColor}
      style={style}
      hideDivider={hideDivider}
      bulkUpdateButton={unSelectAllButton}
      hideBulkUpdateButton={hideBulkUpdateButtons}
    />
  </div>
)

export default ListSelectorView
