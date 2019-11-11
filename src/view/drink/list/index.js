import React from 'react'
import { Link } from "react-router-dom"

import './index.css'

function DrinkListView ({ match: { path } }) {
  const data = [
    { name: 'cola', chineseName: '可乐', volume: '500ml' },
    { name: 'fanta', chineseName: '芬达', volume: '500ml' }
  ]

  return (
    <div className="drink-list-view">
      <table className="drink-list-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>中文名称</th>
            <th>容量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(drink => (
              <tr key={ drink.name }>
                <td>{ drink.name }</td>
                <td>{ drink.chineseName }</td>
                <td>{ drink.volume }</td>
                <td>
                  <Link to={ `${path}/detail/${drink.name}` }>详情</Link>
                  <Link to={ `${path}/supplier/${drink.name}` }>供应商</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DrinkListView




