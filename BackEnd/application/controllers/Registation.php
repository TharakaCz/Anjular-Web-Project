<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 6/15/2018
 * Time: 9:34 AM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Registation extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('client');
	}

	public function getArchitecture(){


		$result=$this->client->AddClient([
			'Name' => $_POST['Cname'],
			'Email' => $_POST['Cemail'],
			'Option' => $_POST['Coption'],
			//<<Password Changing to Hash>>
			'Password' => sha1($_POST['Cpassword']),

		]);

		echo $result;
	}

}
