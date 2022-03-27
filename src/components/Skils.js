import React from 'react'
import "./images/Skils.css"

const Skils = () => {
  return (
    <div>
        <h1 className='h40'> Skills </h1>
        <table>
            <tr>
                <th>Beginner</th>
                <th>Intermediate</th>
                <th>Expert</th>
            </tr>
            <tr>
                <td className='td-img-react icon-skill'>.</td>
                <td>‎</td>
                <td className='x-mark'> ✖ </td>
            </tr>
            <tr>
                <td className='td-img-html icon-skill'>.</td>
                <td>‎</td>
                <td className='x-mark'> ✖ </td>
            </tr>
            <tr>
                <td className='td-img-css icon-skill'>.</td>
                <td>‎</td>
                <td className='x-mark'> ✖ </td>
            </tr>
            <tr>
                <td className='td-img-js icon-skill'>.</td>
                <td className='x-mark'> ✖ </td>
                <td>‎</td>
            </tr>
        </table>
    </div>
  )
}

export default Skils