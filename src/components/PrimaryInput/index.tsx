//@ts-nocheck
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';
import { appConfig } from '../../configs';


const PrimaryInput = (props: any) => {
	const { title, value, onChange, placeholder, requied, type, password }: any = props;

	const [focusing, setFocusing] = useState<boolean>(false);

	const [show, setShow] = useState(false);

	return (
		<View style={[styles.container]}>
			<Text style={styles.title}>
				{title || ''}
				{!!requied ? <Text style={styles.required}> *</Text> : ''}
			</Text>
			<View style={[styles.main, { borderWidth: focusing ? 1 : 0 }]}>
				<TextInput
					value={value}
					onFocus={() => setFocusing(true)}
					onBlur={() => setFocusing(false)}
					onChangeText={onChange}
					placeholder={placeholder}
					style={styles.input}
					keyboardType={!!type ? type : 'default'}
					secureTextEntry={!!password ? !show : false}
				/>
				{!!password && (
					<TouchableOpacity activeOpacity={0.5} onPress={() => setShow(!show)}>
						{/* <Icon type="Ionicons" name={show ? 'eye' : 'eye-off'} size={18} color={"red"} /> */}
						<Text>Cho nay cho nay</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default PrimaryInput;

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	title: {
		marginBottom: 8,
		fontSize: 14,

		color: '#000',
	},
	main: {
		backgroundColor: "red",
		borderRadius: 12,
		width: '100%',
		height: 56,
		paddingHorizontal: 16,
		borderColor: "red",
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		margin: 0,
		padding: 0,
		flex: 1,
		width: '100%',

	},
	required: {
		color: "red",

	},
});
