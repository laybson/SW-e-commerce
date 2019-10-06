import React, { Component } from 'react';
import axios from 'axios';

export default class EditItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemName: '',
            itemPrice: 0,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    itemName: response.data.itemName,
                    itemPrice: response.data.itemPrice
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onChangeItemName(e) {
        this.setState({
            itemName: e.target.value
        });
    }

    onChangeItemPrice(e) {
        this.setState({
            itemPrice: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const item = {
            itemName: this.state.itemName,
            itemPrice: this.state.itemPrice,
        }

        console.log(item);

        axios.post('http://localhost:5000/items/update/'+this.props.match.params.id, item)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit Item</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Item Name: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={ this.state.itemName }
                            onChange={ this.onChangeItemName }/>                            
                    </div>
                    <div className="form-group">
                        <label>Item Price:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={ this.state.itemPrice }
                            onChange={ this.onChangeItemPrice }/>
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            value="Edit Item"
                            className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}