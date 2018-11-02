// @flow

import React from 'react'
import List from 'material-ui/List/List'
import Divider from 'material-ui/Divider'

import ListItem from './ListItem'

import type { ListContainerPropTypes } from './ListSelector.types'

const defaultStyle = {}

const ListContainer = ({
  listItems,
  listItemHoverColor,
  style: containerStyle,
  hideDivider,
  bulkUpdateButton,
  hideBulkUpdateButton,
}: ListContainerPropTypes) => (
  <div style={containerStyle || defaultStyle}>
    {!hideBulkUpdateButton && bulkUpdateButton}
    <div className="listContainer" style={{ overflow: 'auto', height: hideBulkUpdateButton ? '100%' : '90%' }}>
      <List>
        {listItems.map(({ id, disabled, primaryText, secondaryText, style: listItemStyle, onClick }) => (
          <div className={`listItem listItem-${id}`} key={id}>
            <ListItem
              id={id}
              disabled={disabled}
              primaryText={primaryText}
              secondaryText={secondaryText}
              secondaryTextLines={1}
              onClick={onClick}
              style={listItemStyle}
              hoverColor={listItemHoverColor}
            />
            {hideDivider && <Divider />}
          </div>
        ))}
      </List>
    </div>
  </div>
)

export default ListContainer
