const {getTemplateData, printPDF} = require('./services/commonService')
const axios = require('axios')

async function callDocumentSubmission(request) {
    return new Promise((resolve, reject) => {
        const headers = {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJzdWIiOiJzZXJ2aWNlcy1jbGkiLCJleHBpcmVzSW4iOiIxIGRheSIsImlhdCI6MTY5NjgzNzQ0N30.KZ5J8DIlztcs9ERREv3P11ojSorKUGMDhFMm_bIN1srSbb3xtCjoO3icmqLqfbbGGMqPH7mtAPbB4wkneYkngsRnkkCS1qrgXXqMOpPEjJKchlfPx28Uw_HLyY6LFrmNuy6dWO_NuG-c-9P0gxW4aaby6oCP879pjLxkBf3wf9V4-3mQJh2yqxkrSWLo51YdCC1m1r7rJPrv2By7dw9Zr2RsJyKm6PUwqySmPmwdN3LMH4q2SLUwacICwFaKOwnS0KbGCicoP4ZNQM2wQwCGWnJ00ZC_LXIrkf4uygHfjq1vgxEA8JtBMsiBPJpV-9pQdm6M0V_9eX7awuUDIUgM7Q'
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODcyNzg3OTB9.dPBBnz2H6tfWZ4HqCy45L3SLI-elRHPeP4aHw2mJR3e3n1tl1Yi48E3gspBpExjpYqpErartaGVkso-9WjAqoQ'
            }
            // console.log(request);
        // axios.post("https://servicesplatform.tataaia.com/api/proposal/document", request, {
            axios.post("https://devintegrationapi.tataaia.com/api/proposal/document", request, {
                headers: headers
            })
            .then((response) => {
                console.log(response)
                resolve(response.data._status.code);
            })
            .catch((error) => {
                console.log(error)
                resolve(error)
            })
    });
}


async function initProcess() {
    // let templateContent = await getTemplateData("template/cdfcase.html");
    // let request = { "code": "2014022196", "docCatID": "58729311135596" + "", "channel": "HDFCSolution", "docType": "FORM", "agentCode": "4077012" + "", "proposalNo": "C700000193", "document": { "contentType": "text/html", "pageNo": 1, "totalPages": 1,"status":"DRAFT", "content": templateContent } }

    // callDocumentSubmission(request)

    
    let templateContent = await getTemplateData("html/test.html");
    await printPDF(templateContent, "test.pdf");
}

initProcess();