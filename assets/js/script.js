// Wait for the DOM to finish loading before running the page
document.addEventListener("DOMContentLoaded", () => {
    
    const url = new URL(window.location.href);

    // Check for query params
    if(!url.href.includes('?')){

        document.getElementById("title").className = "title";

    } else {
        
        document.getElementById("start").style.display = "none";
        document.getElementById("title").className = "header";

        // Get Query param
        const id = new URLSearchParams(window.location.search).get('id');
        
        if(!isNaN(Number(id))){

            const question = questions
            .filter(question => question.id == id)
            .map(question => question.question);

            const answer = answers
            .filter(answer => answer.id_question == id)
            .map(answer => answer.answer);
            
            const refQuest = answers
            .filter(answer => answer.id_question == id)
            .map(answer => answer.question_target);

            const qa = `<article class="qa">
                            <h2 class="box">${question}</h2>
                            <a href="index.html?id=${refQuest[0]}" class="big-a answer">${answer[0]}</a>
                            <a href="index.html?id=${refQuest[1]}" class="big-a answer">${answer[1]}</a>
                        </article>`;

            document.getElementById("render").innerHTML = qa; 

        } else {

            const res = `<article class="res">
                            <h2>You are Miel${id}</h2>
                            <a href="index.html?id=1" class="big-a restart">Restart</a>
                        </article>`;

            document.getElementById("render").innerHTML = res; 
        }

    }
});


// db
const questions =  [
    {
        "id": "1",
        "question": "Did you have breakfast this morning?"
    },
    {
        "id": "2",
        "question": "Are people annoying you?"
    },
    {
        "id": "3",
        "question": "Is there time to watch your fave series today?"
    },
    {
        "id": "4",
        "question": "Stressed?"
    },
    {
        "id": "5",
        "question": "Are there any logistical issues? (transport, documentation stuff)"
    },
    {
        "id": "6",
        "question": "Is the weather ok?"
    },
    {
        "id": "7",
        "question": "Do you have any good snacks?"
    },
    {
        "id": "8",
        "question": "Did you get cuddles?"
    },
    {
        "id": "9",
        "question": "Wearing two of the same socks?"
    },
    {
        "id": "10",
        "question": "Is your favorite sweater still in the laundry?"
    },
    {
        "id": "11",
        "question": "Did you see a cute dog?"
    },
    {
        "id": "12",
        "question": "Listened to a sad song?"
    },
    {
        "id": "13",
        "question": "Feeling lonely?"
    },
    {
        "id": "14",
        "question": "Do you have finals or important work stuff?"
    },
    {
        "id": "15",
        "question": "Did you try your best and not succeed?"
    },
    {
        "id": "16",
        "question": "Are you a winner?"
    },
    {
        "id": "17",
        "question": "Were you taken out of the zone?"
    },
    {
        "id": "18",
        "question": "Did you give up whilst failing?"
    },
    {
        "id": "19",
        "question": "Do you care about achieving something?"
    },
    {
        "id": "20",
        "question": "Were you an academic weapon today?"
    }
];

const answers = [
    {
        "id ": "1",
        "id_question": "1",
        "answer": "Yes",
        "question_target": "3"
    },
    {
        "id ": "2",
        "id_question": "1",
        "answer": "No",
        "question_target": "2"
    },
    {
        "id ": "3",
        "id_question": "2",
        "answer": "Yes",
        "question_target": "5"
    },
    {
        "id ": "4",
        "id_question": "2",
        "answer": "No",
        "question_target": "4"
    },
    {
        "id ": "5",
        "id_question": "3",
        "answer": "Yes",
        "question_target": "7"
    },
    {
        "id ": "6",
        "id_question": "3",
        "answer": "No",
        "question_target": "9"
    },
    {
        "id ": "7",
        "id_question": "4",
        "answer": "Yes",
        "question_target": "5"
    },
    {
        "id ": "8",
        "id_question": "4",
        "answer": "No",
        "question_target": "3"
    },
    {
        "id ": "9",
        "id_question": "5",
        "answer": "Yes",
        "question_target": "12"
    },
    {
        "id ": "10",
        "id_question": "5",
        "answer": "No",
        "question_target": "6"
    },
    {
        "id ": "11",
        "id_question": "6",
        "answer": "Yes",
        "question_target": "3"
    },
    {
        "id ": "12",
        "id_question": "6",
        "answer": "No",
        "question_target": "8"
    },
    {
        "id ": "13",
        "id_question": "7",
        "answer": "Yes",
        "question_target": "CHILL"
    },
    {
        "id ": "14",
        "id_question": "7",
        "answer": "No",
        "question_target": "11"
    },
    {
        "id ": "15",
        "id_question": "8",
        "answer": "Yes",
        "question_target": "7"
    },
    {
        "id ": "16",
        "id_question": "8",
        "answer": "No",
        "question_target": "12"
    },
    {
        "id ": "17",
        "id_question": "9",
        "answer": "Yes",
        "question_target": "10"
    },
    {
        "id ": "18",
        "id_question": "9",
        "answer": "No",
        "question_target": "14"
    },
    {
        "id ": "19",
        "id_question": "10",
        "answer": "Yes",
        "question_target": "12"
    },
    {
        "id ": "20",
        "id_question": "10",
        "answer": "No",
        "question_target": "11"
    },
    {
        "id ": "21",
        "id_question": "11",
        "answer": "Yes",
        "question_target": "16"
    },
    {
        "id ": "22",
        "id_question": "11",
        "answer": "No",
        "question_target": "14"
    },
    {
        "id ": "23",
        "id_question": "12",
        "answer": "Yes",
        "question_target": "DEPRESSED"
    },
    {
        "id ": "24",
        "id_question": "12",
        "answer": "No",
        "question_target": "15"
    },
    {
        "id ": "25",
        "id_question": "13",
        "answer": "Yes",
        "question_target": "15"
    },
    {
        "id ": "26",
        "id_question": "13",
        "answer": "No",
        "question_target": "14"
    },
    {
        "id ": "27",
        "id_question": "14",
        "answer": "Yes",
        "question_target": "SMARTY"
    },
    {
        "id ": "28",
        "id_question": "14",
        "answer": "No",
        "question_target": "16"
    },
    {
        "id ": "29",
        "id_question": "15",
        "answer": "Yes",
        "question_target": "17"
    },
    {
        "id ": "30",
        "id_question": "15",
        "answer": "No",
        "question_target": "16"
    },
    {
        "id ": "31",
        "id_question": "16",
        "answer": "Yes",
        "question_target": "19"
    },
    {
        "id ": "32",
        "id_question": "16",
        "answer": "No",
        "question_target": "18"
    },
    {
        "id ": "33",
        "id_question": "17",
        "answer": "Yes",
        "question_target": "PISSED"
    },
    {
        "id ": "34",
        "id_question": "17",
        "answer": "No",
        "question_target": "18"
    },
    {
        "id ": "35",
        "id_question": "18",
        "answer": "Yes",
        "question_target": "DEPRESSED"
    },
    {
        "id ": "36",
        "id_question": "18",
        "answer": "No",
        "question_target": "19"
    },
    {
        "id ": "37",
        "id_question": "19",
        "answer": "Yes",
        "question_target": "20"
    },
    {
        "id ": "38",
        "id_question": "19",
        "answer": "No",
        "question_target": "CHILL"
    },
    {
        "id ": "39",
        "id_question": "20",
        "answer": "Yes",
        "question_target": "SMARTY"
    },
    {
        "id ": "40",
        "id_question": "20",
        "answer": "No",
        "question_target": "ENERGETIC"
    }
];


