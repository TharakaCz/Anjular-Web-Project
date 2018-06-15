<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 6/15/2018
 * Time: 9:36 AM
 */

class client extends CI_Model
{
  	public function AddClient($data){
  		$this->db->insert('client',$data);
		return $this->db->affected_rows();
	}
}
