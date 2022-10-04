//@ts-nocheck
import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { appConfig } from '../../configs';

const PrimaryButton = (props: any) => {
	const { title, onPress, loading } = props;

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.container}>
			<Text style={styles.title}>{title || ''}</Text>
			{!!loading && <ActivityIndicator color="#fff" size="small" style={styles.loading} />}
		</TouchableOpacity>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "green",
		width: '100%',
		height: 56,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		borderRadius: 12,
	},
	title: {
		fontSize: 16,
		color: '#fff',

	},
	loading: {
		marginLeft: 10,
	},
});
