
let Employee={
	
	name:"Keerthi",
	sal:8000,
	emp_id:4567,
	bonus: function()
	{
		 return this.sal*10;
	}
};


	console.log(Employee.bonus());
