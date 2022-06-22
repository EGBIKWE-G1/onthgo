// import React from 'react';
// import { Card, Container } from 'react-bootstrap';
// import CheckIcon from '@material-ui/icons/Check';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ButtonCard from './ButtonCard';

// export default function CardSelectButton() {
//     const [selected, setSelected] = React.useState(false);

//     return (
//         <ButtonCard/>
//     );
// }

// import React from 'react';
// import CheckIcon from '@material-ui/icons/Check';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ButtonCard from './ButtonCard';

// export default function StandaloneToggleButton() {
//     const [selected, setSelected] = React.useState(false);

//     return (
//         <ButtonCard/>
//     );
// }

import React from 'react';
import { Jumbotron, Container, Col, Image, CardDeck } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row } from 'react-bootstrap';
import cabinbagimg from '../../assets/img/icons/cabinbag.png';
import infoimg from '../../assets/img/icons/info.png';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png';
import ToggleButton from '@material-ui/lab/ToggleButton';
import './ButtonCard.css';

const useStyles = makeStyles({
    root: {
        // minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardd: {
        '&:hover': {
            background: '#efefef',
        },
    },
});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [selected, setSelected] = React.useState(false);

    return (
        <div
            style={{
                backgroundColor: '#ffffff',
                paddingxx: '20px',
                borderRadius: '5px',
            }}>
            <div
                classNamexx="justify-content-md-center"
                style={{
                    backgroundColor: 'transparent',
                    padding: '20px',
                    widthxx: '600px',
                }}>
                <p style={{ color: '#043f7c' }}>
                    {' '}
                    <span>
                        <b style={{ marginTopxx: '58px' }}>Class &amp; Fare</b>
                    </span>{' '}
                    <span style={{ float: 'right' }}>
                        {' '}
                        <Image
                            style={{
                                backgroundColor: 'white',
                                boxShadow: '0px 0px 5px 0px #ccc',
                                marginBottom: '18px',
                            }}
                            width="40px"
                            src={airpeaceimg}
                            alt=""
                            roundedCircle
                        />
                    </span>
                </p>
            </div>
            {/* <Row style={{ paddingxx: '20px', marginBottom: '10px', marginTop: '20px', marginLeft: '0px', marginRight: '0px'}}>
            <Col md='11' style={{marginTop: '8px'}}>
                <p style={{color: '#043f7c'}}> <b>Class &amp; Fare</b> </p>
            </Col>
            <Col md='1'>
                <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='40px' src={airpeaceimg} alt="" roundedCircle />
            </Col>
        </Row> */}
            <hr className="mb-4" style={{ color: '#043f7c' }} />
            <Row
                style={{
                    padding: '10px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    marginLeft: '0px',
                    marginRight: '0px',
                }}>
                <Col md={4} className="mb-4 MuiToggleButton-root">
                    <Card
                        classNamexx={classes.root}
                        className=""
                        variant="outlined"
                        style={{
                            padding: '20px',
                            focus: 'blue',
                            cursor: 'pointer',
                            backgroundColor: 'rgb(222, 235, 249)',
                        }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                First Class
                            </Typography>
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={cabinbagimg} alt="" /> Cabin Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Checked Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Full Refundable
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Seat Selection
                            </span>
                            <br />
                            <br />
                            <br />
                            <h4 style={{ color: '#000000' }}>
                                {' '}
                                &#8358;561,083{' '}
                            </h4>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={4} className="mb-4 MuiToggleButton-root">
                    <Card
                        classNamexx={classes.root}
                        className=""
                        variant="outlined"
                        style={{ padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Business Class
                            </Typography>
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={cabinbagimg} alt="" /> Cabin Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Checked Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Semi Refundable
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Seat Selection
                            </span>
                            <br />
                            <br />
                            <br />
                            <h4 style={{ color: '#000000' }}>
                                {' '}
                                &#8358;285,940{' '}
                            </h4>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card
                        className={classes.root}
                        variant="outlined"
                        style={{ padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Economy
                            </Typography>
                            <br />
                            <span style={{ color: '#000000' }} className="mb-4">
                                {' '}
                                <Image src={cabinbagimg} alt="" /> Cabin Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }} className="mb-4">
                                {' '}
                                <Image src={infoimg} alt="" /> Non Refundable
                            </span>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <h4 style={{ color: '#000000' }}>
                                {' '}
                                &#8358;199,145{' '}
                            </h4>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            <div
                className="justify-content-md-center"
                style={{
                    backgroundColor: 'transparent',
                    paddingLeft: '25px',
                    paddingBottom: '10px',
                    widthxx: '600px',
                }}>
                <p>
                    {' '}
                    <span>
                        <b style={{ color: '#043f7c' }}>Read more</b> about
                        these fares
                    </span>{' '}
                </p>
            </div>
        </div>
    );
}

// import React from 'react';
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
// import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// export default function ToggleButtons() {
//   const [alignment, setAlignment] = React.useState('center');

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <ToggleButtonGroup
//       value={alignment}
//       exclusive
//       onChange={handleAlignment}
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" aria-label="left aligned">
//         <FormatAlignLeftIcon />
//       </ToggleButton>
//       <ToggleButton value="center" aria-label="centered">
//         <FormatAlignCenterIcon />
//       </ToggleButton>
//       <ToggleButton value="right" aria-label="right aligned">
//         <FormatAlignRightIcon />
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// import React from 'react';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
// import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
// import FormatBoldIcon from '@material-ui/icons/FormatBold';
// import FormatItalicIcon from '@material-ui/icons/FormatItalic';
// import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
// import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import cabinbagimg from '../../assets/img/icons/cabinbag.png'
// import infoimg from '../../assets/img/icons/info.png'
// import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     display: 'flex',
//     border: `1px solid ${theme.palette.divider}`,
//     flexWrap: 'wrap',
//   },
//   divider: {
//     margin: theme.spacing(1, 0.5),
//   },
// }));

// const StyledToggleButtonGroup = withStyles((theme) => ({
//   grouped: {
//     margin: theme.spacing(0.5),
//     border: 'none',
//     '&:not(:first-child)': {
//       borderRadius: theme.shape.borderRadius,
//     },
//     '&:first-child': {
//       borderRadius: theme.shape.borderRadius,
//     },
//   },
// }))(ToggleButtonGroup);

// export default function CustomizedDividers() {
//   const [alignment, setAlignment] = React.useState('left');
//   const [formats, setFormats] = React.useState(() => ['italic']);

//   const handleFormat = (event, newFormats) => {
//     setFormats(newFormats);
//   };

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   const classes = useStyles();

//   return (
//         <div>
//       <Paper elevation={0} className={classes.paper}>
//         <StyledToggleButtonGroup
//           size="small"
//           value={alignment}
//           exclusive
//           onChange={handleAlignment}
//           aria-label="text alignment"
//         >
//           <ToggleButton value="left" aria-label="left aligned">
//             <Card as={Col} md={12} className="text-left" style={{width: '305px', heightxx: '330px', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}>
//                 <Card.Body >
//                     <Card.Title style={{color: '#000000'}}>First Class</Card.Title>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
//                     <br/>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Checked Bag</span>
//                     <br/>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Semi Refundable</span>
//                     <br/>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Seat Selection</span>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <h4 style={{color: '#000000'}}> &#8358;561,083 </h4>
//                 </Card.Body>
//             </Card>
//           </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//                 <Card as={Col} md={12} className="text-left" style={{width: '305px', heightx: '50%', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}>
//                     <Card.Body >
//                         <Card.Title style={{color: '#000000'}}>Business</Card.Title>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Checked Bag</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Semi Refundable</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Seat Selection</span>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <h4 style={{color: '#000000'}}> &#8358;285,940 </h4>
//                     </Card.Body>
//                 </Card>
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//                 <Card as={Col} md={12} className="text-left" style={{width: '305px', heightx: '50%', textTransform: 'none', textAlign: 'left', backgroundColor: 'transparent', border: 'none'}}>
//                     <Card.Body >
//                         <Card.Title style={{color: '#000000'}}>Economy</Card.Title>
//                         <br/>
//                         <span style={{color: '#000000'}} className='mb-4'> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}} className='mb-4'> <Image src={infoimg} alt=""/> Non Refundable</span>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>

//                         <h4 style={{color: '#000000'}}> &#8358;199,145 </h4>
//                     </Card.Body>
//                 </Card>
//             </ToggleButton>
//         </StyledToggleButtonGroup>

//       </Paper>
//     </div>
//   );
// }

// import React from 'react';
// import { Card, Container } from 'react-bootstrap';
// import CheckIcon from '@material-ui/icons/Check';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ButtonCard from './ButtonCard';

// export default function CardSelectButton() {
//     const [selected, setSelected] = React.useState(false);

//     return (
//         <ButtonCard/>
//     );
// }

// import React from 'react';
// import CheckIcon from '@material-ui/icons/Check';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ButtonCard from './ButtonCard';

// export default function StandaloneToggleButton() {
//     const [selected, setSelected] = React.useState(false);

//     return (
//         <ButtonCard/>
//     );
// }

import React from 'react';
import { Jumbotron, Container, Col, Image, CardDeck } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row } from 'react-bootstrap';
import cabinbagimg from '../../assets/img/icons/cabinbag.png';
import infoimg from '../../assets/img/icons/info.png';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png';
import ToggleButton from '@material-ui/lab/ToggleButton';
import './ButtonCard.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        backgroundColor: 'transparent',
        '&:active ': {
            backgroundColor: 'rgb(222, 235, 249)',
            outline: 0,
        },
        '&:focus': {
            backgroundColor: 'rgb(222, 235, 249)',
            outline: 0,
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardd: {
        '&:hover': {
            background: '#efefef',
        },
    },
});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [selected, setSelected] = React.useState(false);

    return (
        <div
            style={{
                backgroundColor: '#ffffff',
                paddingxx: '20px',
                borderRadius: '5px',
            }}>
            <div
                classNamexx="justify-content-md-center"
                style={{
                    backgroundColor: 'transparent',
                    padding: '20px',
                    widthxx: '600px',
                }}>
                <p style={{ color: '#043f7c' }}>
                    {' '}
                    <span>
                        <b style={{ marginTopxx: '58px' }}>Class &amp; Fare</b>
                    </span>{' '}
                    <span style={{ float: 'right' }}>
                        {' '}
                        <Image
                            style={{
                                backgroundColor: 'white',
                                boxShadow: '0px 0px 5px 0px #ccc',
                                marginBottom: '18px',
                            }}
                            width="40px"
                            src={airpeaceimg}
                            alt=""
                            roundedCircle
                        />
                    </span>
                </p>
            </div>
            {/* <Row style={{ paddingxx: '20px', marginBottom: '10px', marginTop: '20px', marginLeft: '0px', marginRight: '0px'}}>
            <Col md='11' style={{marginTop: '8px'}}>
                <p style={{color: '#043f7c'}}> <b>Class &amp; Fare</b> </p>
            </Col>
            <Col md='1'>
                <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='40px' src={airpeaceimg} alt="" roundedCircle />
            </Col>
        </Row> */}
            <hr className="mb-4" style={{ color: '#043f7c' }} />
            <Row
                style={{
                    padding: '10px',
                    marginBottom: '10px',
                    marginTop: '20px',
                    marginLeft: '0px',
                    marginRight: '0px',
                }}>
                <Col md={4} className="mb-4 MuiToggleButton-root">
                    {/* <Card className={classes.root} variant="outlined" style={{padding: '20px', focus: 'blue', cursor: 'pointer', backgroundColor: 'rgb(222, 235, 249)'}}> */}
                    <button
                        className={classes.root}
                        variant="outlined"
                        style={{ padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                First Class
                            </Typography>
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={cabinbagimg} alt="" /> Cabin Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Checked Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Full Refundable
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Seat Selection
                            </span>
                            <br />
                            <br />
                            <br />
                            <h4 style={{ color: '#000000' }}>
                                {' '}
                                &#8358;561,083{' '}
                            </h4>
                        </CardContent>
                    </button>
                    {/* </Card> */}
                </Col>
                <Col md={4} className="mb-4">
                    <button
                        className={classes.root}
                        variant="outlined"
                        style={{ padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Business Class
                            </Typography>
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={cabinbagimg} alt="" /> Cabin Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Checked Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Semi Refundable
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }}>
                                {' '}
                                <Image src={infoimg} alt="" /> Seat Selection
                            </span>
                            <br />
                            <br />
                            <br />
                            <h4 style={{ color: '#000000' }}>
                                {' '}
                                &#8358;285,940{' '}
                            </h4>
                        </CardContent>
                    </button>
                </Col>
                <Col md={4} className="mb-4">
                    <button
                        className={classes.root}
                        variant="outlined"
                        style={{ padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Economy
                            </Typography>
                            <br />
                            <span style={{ color: '#000000' }} className="mb-4">
                                {' '}
                                <Image src={cabinbagimg} alt="" /> Cabin Bag
                            </span>
                            <br />
                            <br />
                            <span style={{ color: '#000000' }} className="mb-4">
                                {' '}
                                <Image src={infoimg} alt="" /> Non Refundable
                            </span>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <h4 style={{ color: '#000000' }}>
                                {' '}
                                &#8358;199,145{' '}
                            </h4>
                        </CardContent>
                    </button>
                </Col>
            </Row>
            <div
                className="justify-content-md-center"
                style={{
                    backgroundColor: 'transparent',
                    paddingLeft: '25px',
                    paddingBottom: '10px',
                    widthxx: '600px',
                }}>
                <p>
                    {' '}
                    <span>
                        <b style={{ color: '#043f7c' }}>Read more</b> about
                        these fares
                    </span>{' '}
                </p>
            </div>
        </div>
    );
}

// import React from 'react';
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
// import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// export default function ToggleButtons() {
//   const [alignment, setAlignment] = React.useState('center');

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <ToggleButtonGroup
//       value={alignment}
//       exclusive
//       onChange={handleAlignment}
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" aria-label="left aligned">
//         <FormatAlignLeftIcon />
//       </ToggleButton>
//       <ToggleButton value="center" aria-label="centered">
//         <FormatAlignCenterIcon />
//       </ToggleButton>
//       <ToggleButton value="right" aria-label="right aligned">
//         <FormatAlignRightIcon />
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

// import React from 'react';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
// import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
// import FormatBoldIcon from '@material-ui/icons/FormatBold';
// import FormatItalicIcon from '@material-ui/icons/FormatItalic';
// import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
// import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import cabinbagimg from '../../assets/img/icons/cabinbag.png'
// import infoimg from '../../assets/img/icons/info.png'
// import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     display: 'flex',
//     border: `1px solid ${theme.palette.divider}`,
//     flexWrap: 'wrap',
//   },
//   divider: {
//     margin: theme.spacing(1, 0.5),
//   },
// }));

// const StyledToggleButtonGroup = withStyles((theme) => ({
//   grouped: {
//     margin: theme.spacing(0.5),
//     border: 'none',
//     '&:not(:first-child)': {
//       borderRadius: theme.shape.borderRadius,
//     },
//     '&:first-child': {
//       borderRadius: theme.shape.borderRadius,
//     },
//   },
// }))(ToggleButtonGroup);

// export default function CustomizedDividers() {
//   const [alignment, setAlignment] = React.useState('left');
//   const [formats, setFormats] = React.useState(() => ['italic']);

//   const handleFormat = (event, newFormats) => {
//     setFormats(newFormats);
//   };

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   const classes = useStyles();

//   return (
//         <div>
//       <Paper elevation={0} className={classes.paper}>
//         <StyledToggleButtonGroup
//           size="small"
//           value={alignment}
//           exclusive
//           onChange={handleAlignment}
//           aria-label="text alignment"
//         >
//           <ToggleButton value="left" aria-label="left aligned">
//             <Card as={Col} md={12} className="text-left" style={{width: '305px', heightxx: '330px', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}>
//                 <Card.Body >
//                     <Card.Title style={{color: '#000000'}}>First Class</Card.Title>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
//                     <br/>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Checked Bag</span>
//                     <br/>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Semi Refundable</span>
//                     <br/>
//                     <br/>
//                     <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Seat Selection</span>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <h4 style={{color: '#000000'}}> &#8358;561,083 </h4>
//                 </Card.Body>
//             </Card>
//           </ToggleButton>
//             <ToggleButton value="center" aria-label="centered">
//                 <Card as={Col} md={12} className="text-left" style={{width: '305px', heightx: '50%', textTransform: 'none', backgroundColor: 'transparent', border: 'none'}}>
//                     <Card.Body >
//                         <Card.Title style={{color: '#000000'}}>Business</Card.Title>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Checked Bag</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Semi Refundable</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Seat Selection</span>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <h4 style={{color: '#000000'}}> &#8358;285,940 </h4>
//                     </Card.Body>
//                 </Card>
//             </ToggleButton>
//             <ToggleButton value="right" aria-label="right aligned">
//                 <Card as={Col} md={12} className="text-left" style={{width: '305px', heightx: '50%', textTransform: 'none', textAlign: 'left', backgroundColor: 'transparent', border: 'none'}}>
//                     <Card.Body >
//                         <Card.Title style={{color: '#000000'}}>Economy</Card.Title>
//                         <br/>
//                         <span style={{color: '#000000'}} className='mb-4'> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
//                         <br/>
//                         <br/>
//                         <span style={{color: '#000000'}} className='mb-4'> <Image src={infoimg} alt=""/> Non Refundable</span>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>
//                         <br/>

//                         <h4 style={{color: '#000000'}}> &#8358;199,145 </h4>
//                     </Card.Body>
//                 </Card>
//             </ToggleButton>
//         </StyledToggleButtonGroup>

//       </Paper>
//     </div>
//   );
// }
