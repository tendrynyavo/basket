package com.dreamteam.statistics.model.player;

import java.sql.Date;

public class Player{
	
	String id;
	String nom;
	Date naissance;

	public Player() throws Exception{

	}

	public Player( String id, String nom, Date naissance ) throws Exception{
		this.setId(id);
		this.setNom(nom);
		this.setNaissance(naissance);
	}

	public void setId( String id ) throws Exception{
		this.id = id;
	}
	public String getId(){
		return this.id;
	}

	public void setNom(String nom) throws Exception{
		this.nom = nom;
	}
	public String getNom(){
		return this.nom;
	}

	public void setNaissance(Date naissance) throws Exception{
		this.naissance = naissance;
	}

	public Date getNaissance(){
		return this.naissance;
	}

	public static Player[] getPlayersTable() throws Exception{

		Player[] players = new Player[3];
		players[0] = new Player( "1" , "Sarobidy" , Date.valueOf("2002-01-01") );
		players[1] = new Player( "1" , "Layah" , Date.valueOf("2002-02-03") );
		players[2] = new Player( "1" , "Tendry" , Date.valueOf("2002-03-07") );

		return players;
	}

}