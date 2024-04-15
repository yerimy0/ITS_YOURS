import WriteForm from '../../components/WriteFrom';
import EditForm from '../../components/WriteEdit';
import { useParams } from 'react-router-dom';

function ProductWrite() {
	const { id } = useParams();
	console.log(id);
	return <> {id === undefined ? <WriteForm /> : <EditForm />}</>;
}

export default ProductWrite;
