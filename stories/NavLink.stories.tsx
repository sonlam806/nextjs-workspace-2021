import * as React from 'react'
import { storiesOf } from '@storybook/react'
import NavLink from '../src/atoms/NavLink/NavLink'

storiesOf('NavLink', module).add('NavLink', () => (
  <NavLink key={'0'} label="case studies" />
))
