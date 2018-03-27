//current energy consumption update picture
function update_member_profit(status) {
    $("#member_profit").text(String(status));
}
// function update_member_order(status) {
//     $("#member_order").text(String(status));
// }
function update_member(input1,status) {
    $("#"+input1).text(String(status));
}


$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyD2tWLoofh0f2ewf9wGWbTULKJgmqkkUMg",
      authDomain: "python-training-49a80.firebaseapp.com",
      databaseURL: "https://python-training-49a80.firebaseio.com",
      projectId: "python-training-49a80",
      storageBucket: "python-training-49a80.appspot.com",
      messagingSenderId: "1013936644055"
    };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();
    //
    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    // total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'member_profit') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    // var member_oderRef = firebase.database().ref("member2");
    //
    // member_oderRef.on("child_changed", function(data) {
    //     console.log(data.key);
    //     console.log(data.val());
    //     if(data.key == "1PV221445K1200100") {
    //         total_load_activePower  = data.val().load_activePower;
    //     } else if (data.key == 'member_order') {
    //         update_member_order(,parseInt(data.val()));
    //     } else {
    //         console.log("need to parse this key " + data.key)
    //     }
    // });

    var member_oderRef = firebase.database().ref("member2");

    member_oderRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'member_order') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var member_issueRef = firebase.database().ref("member3");

    member_issueRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'issue_report') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var member_ipomarginRef = firebase.database().ref("member4");

    member_ipomarginRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'ipo_margin') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var member_paymentsRef = firebase.database().ref("member5");

    member_paymentsRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'payments') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var member_logisticsRef = firebase.database().ref("member6");

    member_logisticsRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'logistics') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var member_avroderRef = firebase.database().ref("member7");

    member_avroderRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'avr_order') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var member_transactionsRef = firebase.database().ref("member8");

     member_transactionsRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'transactions') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    var member_revenueRef = firebase.database().ref("member9");

     member_revenueRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'revenue') {
            update_member(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

    
});
