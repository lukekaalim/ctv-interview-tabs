import React from 'react'
import { Tab } from '../Tab/Tab'
import { Card } from '../Card/Card'

export function TabbedGrid(props) {
    return (<div>
        <div className="tab-row">
            <Tab title="Tab 1" />
            <Tab title="Tab 2" />
            <Tab title="Tab 3" />
            <Tab title="Tab 4" />
        </div>

        <div className="card-row">
            <Card title="Tab 1" />
            <Card title="Card 2" />
            <Card title="Card 3" />
            <Card title="Card 4" />
            <Card title="Card 5" />
            <Card title="Card 6" />
        </div>
    </div>)
}