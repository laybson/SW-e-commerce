import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
    <tr>
        
            <td>{ props.item.itemName }</td>
            <td>{ props.item.itemPrice }</td>
            <td>
                <Link to={ "/edit/"+props.item._id }>
                    edit
                </Link> | 
                <a href="#" onClick={() => {
                    props.deleteItem(props.item._id)}}>
                     delete
                </a>
            </td>
       
        
    </tr>
)

export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/')
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteItem(id) {
        axios.delete('http://localhost:5000/items/'+id)
            .then(res => console.log(res.data));            
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
    }

    itemsList() {
        return this.state.items.map(currentItem => {
            return <Item 
                item={ currentItem }
                deleteItem={ this.deleteItem }
                key={ currentItem._id }/>
        })
    }

    render() {
        return (
            <div>
                <h3>Items</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.itemsList() }
                    </tbody>
                </table>
            </div>
        );
    }
}