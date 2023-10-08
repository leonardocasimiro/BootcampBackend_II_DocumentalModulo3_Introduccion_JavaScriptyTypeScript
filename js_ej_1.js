////  By Leo Casimiro

const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;


const fromCSV = (csv) => {

    const csv_arrary = csv.split('\n');
    const headers = csv_arrary[0].split(',');
    let users = csv_arrary.slice(1);
    users = users.map((user_row)=>{
        return user_row.split(',');
    });

    Obj = users.map((user_row)=>{
        return headers.reduce((Obj, head, index)=>{
            Obj = {...Obj, [head] : user_row[index]};
            return Obj;
        },{});
    });

    return Obj;
};

result = fromCSV(data);
console.log(result);
console.log("#########################  FIN  #################");