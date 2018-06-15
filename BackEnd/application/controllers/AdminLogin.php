<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 6/15/2018
 * Time: 9:54 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class AdminLogin extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('admin');
	}

	public function getAdmin()
	{
		// $Name = 'Tharaka';
		// $Password = 'codepen';
		$result=$this->admin->AddAdmin([

			// 'Name' => $Name,
			// 'Password' => $Password,
			'Email' => $_POST['Aemail'],
			'Password' => $_POST['Apassword'],

		]);
		echo $result;


	}

}
