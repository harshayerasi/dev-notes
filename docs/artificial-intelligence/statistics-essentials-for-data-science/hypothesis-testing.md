---
id: hypothesis-testing
title: Hypothesis Testing
sidebar_label: Hypothesis Testing
---

## Hypothesis testing introduction
Confidence interval provides us with the estimation of where the parameters are located. However, when you are making a decision you need a Yes / No answer

The correct approach in this case is to use a test called Hypothesis Testing
- The outcome of the test references the population rather than the sample
- Generally, the researcher is trying to reject the null hypothesis
### Steps in data-driven decision-making
1. Formulate a Hypothesis
2. Find the right test
3. Execute the test
4. Decision based on the result

The Null Hypothesis is the one to be tested and the alternate is everything else

| Hypothesis | Notation |
| ---------- | -------- |
| Null hypothesis | H<sub>0</sub> |
| Alternative hypothesis | H<sub>1</sub> or H<sub>A</sub> |

#### Example 1
Hypothesis: According to Glassdoor reviews an average data scientist salary in US is $113,000  
H<sub>0</sub> : &#x03BC;<sub>0</sub> = $ 113,000  
Accept if:  &#x03BC;<sub>0</sub> is close enough to the true mean &#x03BC;  
Reject if:  &#x03BC;<sub>0</sub> is too far from the true mean &#x03BC;  
We assume that the mean salary is $113,000 and try to prove otherwise.

#### Example 2
Hypothesis: Data scientists make more than $125,000  
Test:  
H<sub>0</sub> : μ<sub>0</sub> > $125,000 (Status Quo)  
H<sub>1</sub> : μ<sub>0</sub> ≤ $125,000 (Change or Innovation)

## Reason why hypothesis testing works
#### Example
The true mean of UK University students is 55%  
Hypothesis: The UK University dean believes that the average grade is 70%  

H<sub>0</sub> : μ<sub>grade</sub> = 70%  
H<sub>1</sub> : μ<sub>grade</sub> ≠ 70%  

The significance level α is the probability of rejecting the null hypothesis, if it is true.  
Typical values for α are 0.01, 0.05, 0.1  
If you expect to have little or no mistakes then select α=0.01  

### Type 1 Error
- Reject a true null Hypothesis
- False positive
- Probability of this error is equal to α
- Critical problem

### Type 2 Error
- Accept a false null Hypothesis
- False Negative
- Probability of this error is equal to β, which depends on sample size(n) and variance(σ)
- Smaller problem
- The probability of rejecting a false null hypothesis is 1-β(Power of test), this is the researcher goal

<table>
  <thead>
    <tr>
    <th colspan="2" rowspan="2"> Statistical errors </th>
      <th colspan="2"> The Truth </th>
    </tr>
    <tr>
      <th> H<sub>0</sub>True </th>
      <th> H<sub>0</sub>False </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"> <b>Your research</b> </td>
      <td> <b>Accepted H<sub>0</sub></b> </td>
      <td> True positive </td>
      <td> (Wrongly invited her) Type 2 Error: False negative </td>
    </tr>
    <tr>
      <td> <b>Rejected H<sub>0</sub></b> </td>
      <td> (Missed your chance) Type 1 error: False positive </td>
      <td> True Negative </td>
    </tr>
  </tbody>
</table>
