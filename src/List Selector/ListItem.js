// @flow

import React from 'react'
import MUIListItem from 'material-ui/List/ListItem'

import type { ListItemPropTypes } from './ListSelector.types'

const defaultStyle = {}

const ListItem = ({
  id,
  disabled = false,
  primaryText,
  secondaryText,
  style,
  onClick,
  hoverColor,
}: ListItemPropTypes) => (
  <MUIListItem
    key={id}
    disabled={disabled}
    primaryText={primaryText || ''}
    secondaryText={secondaryText || ''}
    secondaryTextLines={1}
    onClick={() => onClick(id)}
    style={style || defaultStyle}
    hoverColor={hoverColor}
  />
)

export default ListItem
