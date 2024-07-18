import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Chart from "react-apexcharts";
import { numberWithCommas } from '../utils/config';

function HomeLoan() {


    const [options, setOptions] = useState({
        chart: {
            type: 'donut',
        },
        labels: ['princpipal Amount', 'Interest Amount'],
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                },
            },
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            show: false,
        },
    });

    const [cost, setCost] = useState(0);
    const [interestRate, setInterestRate] = useState(10);
    const [tenure, setTenure] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [emi, setEmi] = useState(0);
    const [principalAmount, setPrincipalAmount] = useState(0);
    console.log("principalAmount === ", principalAmount);
    const [interestAmount, setInterestAmount] = useState(0);
    console.log("IntrestAmount", interestAmount);
    const [series, setSeries] = useState([]);

    console.log("serise ===", series);

    useEffect(()=>{
        setSeries([+principalAmount, +interestAmount])
    },[principalAmount, interestAmount])

    const calculateEMI = () => {
        if (!cost || !tenure || !interestRate) return 0;

        const loanAmount = cost - downPayment;
        const rateOfInterest = interestRate / 100 / 12; 
        const numberOfMonths = tenure * 12; 

        const emi =
            (loanAmount * rateOfInterest * (Math.pow(1 + rateOfInterest, numberOfMonths))) /
            (Math.pow(1 + rateOfInterest, numberOfMonths) - 1);

        const principal = emi * numberOfMonths;
        const interest = principal - loanAmount;

        setEmi(emi.toFixed(0));
        setPrincipalAmount(principal.toFixed(0));
        setInterestAmount(interest.toFixed(0));
    };

    const handleCostChange = (e) => {
        setCost(e.target.value);
    };

    const handleInterestRateChange = (e) => {
        setInterestRate(e.target.value);
    };

    const handleTenureChange = (e) => {
        setTenure(e.target.value);
    };

    const handleDownPaymentChange = (value) => {
        setDownPayment(value);
    };

    useEffect(() => {
        calculateEMI();
    }, [cost, interestRate, tenure, downPayment]);

    return (
        <div className="Emi_calculater_reacted">
            <div className='Emi_firsted_calculated'>
                <div className="Emi_releted_amount">
                    <div className="Emi_first_field">
                        <div className="monthly_emi_pay">
                            <p className='monthley_pay'>Monthly EMI Pay</p>
                            <p className='payment'>{numberWithCommas(emi)}</p>
                        </div>
                        <div>
                            <hr style={{ color: "black", height: "50px" }} />
                        </div>
                        <div className="monthly_emi_pay">
                            <p className='monthley_pay'>Total Amount</p>
                            <p className='payment'>{numberWithCommas(principalAmount)}</p>
                        </div>
                    </div>
                    <div className="Emi_second_field">
                        <div className="Emi_loan_amount_fild">
                            <p>Loan Amount</p>
                            <input
                                type="text"
                                value={cost}
                                onChange={handleCostChange}
                                style={{ width: "90px", outline: "none", textAlign : "center" }}
                            />
                        </div>
                        <div className='emi_slider'>
                            <Slider
                                value={cost}
                                onChange={(e, value) => setCost(value)}
                                min={500000}
                                max={100000000}
                                valueLabelDisplay="auto"
                            />
                        </div>
                        <div className='emi_par_anuman'>
                            <p className='emi_lakh_anuam'>₹ 5 lakh</p>
                            <p className='emi_lakh_anuam'>₹ 10 cr</p>
                        </div>
                    </div>
                    <div className="Emi_second_field">
                        <div className="Emi_loan_amount_fild">
                            <p>Tenure</p>
                            <input
                                type="text"
                                value={tenure}
                                onChange={handleTenureChange}
                                style={{ width: "90px", outline: "none", textAlign:"center" }}
                            />
                        </div>
                        <div className='emi_slider'>
                            <Slider
                                value={tenure}
                                onChange={(e, value) => setTenure(value)}
                                min={1}
                                max={30}
                                valueLabelDisplay="auto"
                            />
                        </div>
                        <div className='emi_par_anuman'>
                            <p className='emi_lakh_anuam'>1 year</p>
                            <p className='emi_lakh_anuam'>30 years</p>
                        </div>
                    </div>
                    <div className="Emi_second_field">
                        <div className="Emi_loan_amount_fild">
                            <p>Interest Rate (% p.a.)</p>
                            <input
                                type="text"
                                value={interestRate}
                                onChange={handleInterestRateChange}
                                style={{ width: "90px", outline: "none", textAlign : "center" }}
                            />
                        </div>
                        <div className='emi_slider'>
                            <Slider
                                value={interestRate}
                                onChange={(e, value) => setInterestRate(value)}
                                min={1}
                                max={25}
                                valueLabelDisplay="auto"
                            />
                        </div>
                        <div className='emi_par_anuman'>
                            <p className='emi_lakh_anuam'>5%</p>
                            <p className='emi_lakh_anuam'>25%</p>
                        </div>
                    </div>
                </div>
                <div className="second_emi_calculater">
                    <div className='second_first_calculate'>
                        <div className="donut">
                            <div className="donut">
                                {/* <Chart options={options} series={series} type="donut" width="380" /> */}
                                <Chart options={options} series={series} type="donut" width="380" />

                            </div>
                        </div>
                        <div className='graph_side'>
                            Are you all set to apply? Take the leap and begin your home loan journey.
                        </div>
                    </div>
                    <div className="Emi_second_field_calculated">
                        <div className="monthly_emi_pay">
                            <p><i class="fa-solid fa-stop"></i>Principal</p>
                            <p>Amount</p>
                            <p className='payment'>{numberWithCommas(cost)}</p>
                        </div>
                        <div>
                            <hr style={{ color: "black", height: "90px" }} />
                        </div>
                        <div className="monthly_emi_pay">
                            <p><i class="fa-solid fa-square"></i>Interest</p>
                            <p>Amount</p>
                            <p className='payment'>{numberWithCommas(interestAmount)}</p>
                        </div>
                     </div>       
                </div>
                </div>
                </div>
)}

export default HomeLoan;