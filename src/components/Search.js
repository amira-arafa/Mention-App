import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {searchResult} from '../shared/redux/actions/index';

export class Search extends React.Component{
    //el input wel label dol properties gowa obj esmo formprops 3mlt destruct 3la tol , el input wel label dol shaylen m3lomat 3n el field 
    renderInput=({input,label})=>{
        return(
            <div>
                <label>{label}</label>
                <input type="search" {...input} className="input-group"/>
            </div>
        );
    }
    onSubmit=(formValues)=>{
        //hn3ml hna fire ll action creator lw el formvalues msh fdya 
        if(formValues){
            this.props.searchResult(formValues);
        }
    }
    render(){
        return(
            <div>
                {/* this.props hna shyla kol el7agat ely t5os el form .. gwa el props feh method esmha handleSubmit bn pass leha el fn bta3tna bta3t el onsubmit*/}
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="SearchField" label="Search" component={this.renderInput}/>
                    <button className="btn btn-primary">Search for results </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form:'Search'
})(connect(null,{searchResult})(Search));

