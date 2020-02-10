import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from '../redux/actions'

export class UnconnectedInput extends Component {
	constructor() {
		super()
		this.state = {
			currentGuess: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		const currentGuess = this.state.currentGuess
		if (currentGuess) {
			this.props.guessWord(currentGuess)
			this.setState({ currentGuess: '' })
		}
	}

	render() {
		const contents = this.props.success ? null : (
			<form className='form-inline'>
				<input
					data-test='input-box'
					className='mb-2 mx-sm-1'
					type='text'
					value={this.state.currentGuess}
					onChange={e => this.setState({ currentGuess: e.target.value })}
					placeholder='Enter guess ...'
				/>
				<button data-test='submit-button' className='btn btn-primary mb-2' type='submit' onClick={this.handleSubmit}>
					SUBMIT
				</button>
			</form>
		)
		return <div data-test='component-input'>{contents}</div>
	}
}

const mapStateToProps = ({ success }) => {
	return { success }
}

// passing an object as second argument instead of mapDispatchToProps func because all we need to do is pass guessWord - we dont need to the full utility
export default connect(mapStateToProps, { guessWord })(UnconnectedInput)
