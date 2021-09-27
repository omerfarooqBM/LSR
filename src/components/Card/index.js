import Card from '@mui/material/Card';

function MyCard(props) {
    return (
        <Card>
            {props.children}
        </Card>
    )
}

export default MyCard;