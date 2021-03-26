/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// <meter min="0" max="100" value={value}>{value}</meter>
// <div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20 %</div>

const ProgressBar = ({ value, size }) => {
	let height;
	let padding = 0;
	let radius = 4;
	if (size === 'large') {
		height = 24;
		padding = 4;
		radius = 8;
	} else if (size === 'medium') {
		height = 12;
	} else if (size === 'small') {
		height = 8;
	} else {
		throw new Error('Needs a size');
	}

	return (
		<Wrapper
			style={{
				'--color': COLORS.transparentGray15,
				'--radius': radius + 'px',
				'--size': height + 'px',
			}}
		>
			<Padding
				style={{
					'--padding': padding + 'px',
				}}
			>
				<Bar
					style={{
						'--value': `${value}%`,
						'--radius': radius + 'px',
						'--padding': padding + 'px',
					}}
				>
					<VisuallyHidden children={value} />
				</Bar>
			</Padding>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	width: 50%;
	height: var(--size);
	background-color: ${COLORS.transparentGray15};
	border-radius: var(--radius);
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	overflow: hidden;
`;

const Padding = styled.div`
	position: absolute;
	left: var(--padding);
	top: var(--padding);
	right: var(--padding);
	bottom: var(--padding);
	width: calc(100% - 2 * var(--padding));
	border-radius: 4px;
	background-color: ${COLORS.transparentGray15};
	overflow: hidden;
`;

const Bar = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	width: var(--value);
	background-color: ${COLORS.primary};
`;

export default ProgressBar;
