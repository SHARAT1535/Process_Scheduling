function calculate() {
    const algo = document.getElementById("mySelect").value;
    const atInput = document.getElementById("at").value.split(" ").map(Number);
    const btInput = document.getElementById("bt").value.split(" ").map(Number);

    switch (algo) {
        case "op1":
            calculatefcfs(atInput, btInput);
            break;
        case "op2":
            break;
        case "op3":
            break;
    }
}

function calculatefcfs(atInput, btInput) {
    let ct = 0;
    let totalTAT = 0;
    let totalWT = 0;
    
    const resultTable = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
    resultTable.innerHTML = ""; 
    for (let i = 0; i < atInput.length; i++) {
        if (ct < atInput[i]) {
            ct = atInput[i];
        }
        ct += btInput[i];
        const tat = ct - atInput[i];
        const wt = tat - btInput[i];
      
        totalTAT += tat;
        totalWT += wt;
      
        const newRow = resultTable.insertRow();
        newRow.innerHTML = `
            <td>P${i + 1}</td>
            <td>${atInput[i]}</td>
            <td>${btInput[i]}</td>
            <td>${ct}</td>
            <td>${tat}</td>
            <td>${wt}</td>
        `;
    }
    
    const avgTAT = totalTAT / atInput.length;
    const avgWT = totalWT / atInput.length;
    
    document.getElementById("avgTAT").textContent = `Avg TAT: ${avgTAT.toFixed(2)}`;
    document.getElementById("avgWT").textContent = `Avg WT: ${avgWT.toFixed(2)}`;

    generateGanttChart(btInput, ct);
}
