<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 6/15/2018
 * Time: 9:54 PM
 */



class admin extends CI_Model
{
	public function AddAdmin($data){


		$this->db->insert('admin',$data);
		return $this->db->affected_rows();
	}
}
