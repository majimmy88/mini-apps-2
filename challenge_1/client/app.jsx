import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar.jsx'
import EventList from './EventList.jsx'
import ReactPaginate from 'react-paginate';
// import $ from 'jquery';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: 0,
            value: '',
            array: [],
            offset: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        Axios.get('http://localhost:3000/events')
        .then((res)=>{
            console.log(res)
            // console.log(res.data.slice(0,10))
            this.setState({array:res.data.slice(0,30)})

        })
        .catch((err)=>{
            console.error(err)
        })
    }
    handleChange(event) {
        console.log(event.target.value)
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        Axios.get(`http://localhost:3000/events?q=${this.state.value}`)
        .then((res)=>{
            console.log(res)
            this.setState({array:res.data.slice(0,10)})
        })
        .catch((err)=>{
            console.error(err)
        })
    }
    handlePageClick(data) {
        let selected = data.selected;
        Axios.get(`http://localhost:3000/events?_page=${selected}&_limit=10`)
        .then((res)=>{
            console.log(res)
            this.setState({array:res.data.slice()})
        })
        .catch((err)=>{
            console.error(err)
        })
      };

    render() {
        return (
            <div>
                <SearchBar
                value={this.state.value}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
                <br></br>
                <EventList array = {this.state.array}/>
                <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                />
            </div>
        )
    }
}

export default App;