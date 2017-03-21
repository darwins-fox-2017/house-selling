import Home from './components/Home.vue'
import Shop from './components/Shop.vue'
import User from './components/user/User.vue'

import Item from './components/item/Item.vue'
import ItemAll from './components/item/ItemAll.vue'
import ItemDetail from './components/item/ItemDetail.vue'
import ItemNew from './components/item/ItemNew.vue'
import ItemEdit from './components/item/ItemEdit.vue'

import House from './components/house/House.vue'
import HouseAll from './components/house/HouseAll.vue'
import HouseDetail from './components/house/HouseDetail.vue'
import HouseNew from './components/house/HouseNew.vue'
import HouseEdit from './components/house/HouseEdit.vue'

export const routes = [
  { path : '', component: Home, children: [
    {path: '/shop', component: Shop}
  ]},
  { path : '/users', component: User},
  { path : '/items', component:Item, children: [
    {path: '', component: ItemAll},
    {path: 'new', component: ItemNew},
    {path: ':id', component: ItemDetail},
    {path: ':id/edit', component: ItemEdit}
  ]},
  { path : '/houses', component:House, children: [
    {path: '', component: HouseAll},
    {path: 'new', component: HouseNew},
    {path: ':id', component: HouseDetail},
    {path: ':id/edit', component: HouseEdit}
  ]}
]
