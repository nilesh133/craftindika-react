import React from 'react'
import "./faqcomponent.css";

// MUI Import
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FAQComponent = ({heading}) => {
    return (
        <div className="faqcomponent">
            <div className="faqcomponent_left">
                <h3>{heading.firstLine}</h3>
                <h3>{heading.secondLine}</h3>
            </div>
            <div className='faqcomponent_right'>
                <Accordion>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What is CraftPartner Program? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        It is a prestigious partnership program and ingenious initiative by CraftIndika, designed to empower individuals to establish a flourishing business in the realm of eco-friendly handicrafts. By facilitating an extensive array of services, such as strategic business consultation, seamless logistics, and cutting-edge digital footprints, this exceptional program paves the way for aspiring entrepreneurs to conquer the market with authentic, handcrafted products. CraftPartner Program not only fosters high-return partnerships but also endeavors to create a lasting social and environmental impact.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What is the Pre-requisite of CraftParter Program ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        The prerequisites for joining the CraftPartner Program vary depending on the specific requirements set by CraftIndika according to the region of operation. Generally, individuals who are passionate about arts, crafts, and eco-friendly products, and possess a strong entrepreneurial spirit, are ideal candidates. A basic understanding of business operations and marketing can be advantageous, but with CraftIndika's comprehensive support and guidance, even novices can successfully navigate the intricacies of establishing and managing a profitable handicraft venture. It's essential for participants to be committed, driven, and open to learning in order to thrive within the program.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Can I join the CraftPartner Program if I don't have any experience in the handicraft industry?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Yes, even if you don't have any prior experience in the handicraft industry, you can still join the CraftPartner Program. CraftIndika provides comprehensive guidance and support to help you navigate the intricacies of the business and achieve success.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* <Accordion>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What is the pricing, do we get some discounts?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It is a prestigious partnership program designed to cater to businesses seeking exceptional, handcrafted works of art for their expansive spaces, hotel lobbies, and beyond.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>How do we get started?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            It is a prestigious partnership program designed to cater to businesses seeking exceptional, handcrafted works of art for their expansive spaces, hotel lobbies, and beyond.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
            </div>
        </div>
    )
}

export default FAQComponent