import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);
	const width = displayedValue.length;

	return (
		// <select value={value} onChange={onChange}>
		//   {children}
		// </select>
		<Wrapper
			value={value}
			onChange={onChange}
			style={{ '--width': `${width}em` }}
		>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.select`
	width: var(--width);
	padding: 12px;
	padding-right: 10px;
	color: ${COLORS.gray700};
	appearance: none;
	background-color: ${COLORS.gray50};
	border-radius: 8px;
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	cursor: inherit;
	line-height: inherit;
	border: 2px solid ${COLORS.gray50};

	&:hover {
		color: ${COLORS.black};
	}

	&:focus {
		border-radius: 3px;
	}
`;

export default Select;
