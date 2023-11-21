package com.dreamteam.statistics.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table
public class Contrat {
    
    @Column(name = "Id_contrat")
    String IdContrat;

    @Column(name = "Date_contrat")
    Date DateContrat;

    @Column(name = "Id_joueur")
    String IdJoueur;

    @Column(name = "Id_saison")
    String IdSaison;

    @Column(name = "Id_equipe")
    String IdEquipe;

    //SETTERS
    public void setIdContrat(String id){
        this.IdContrat = id;
    }

    public void setDateContrat(Date date){
        this.DateContrat = date;
    }

    public void setIdJoueur(String idj){
        this.IdJoueur = idj;
    }

    public void setIdSaison(String ids){
        this.IdSaison = ids;
    }

    public void setIdEquipe(String ide){
        this.IdEquipe = ide;
    }

    //GETTERS
    public String getIdContrat(){
        return this.IdContrat;
    }

    public Date getDateContrat(){
        return this.DateContrat;
    }

    public String getIdJoueur(){
        return this.IdJoueur;
    }

    public String getIdSaison(){
        return this.IdSaison;
    }

    public String getIdEquipe(){
        return this.IdEquipe;
    }

    public Contrat(){

    }

    public Contrat(String Idcontrat, Date datecontrat, String idjoueur, String idsaison, String idequipe){
        this.setIdContrat(Idcontrat);
        this.setDateContrat(datecontrat);
        this.setIdJoueur(idjoueur);
        this.setIdSaison(idsaison);
        this.setIdEquipe(idequipe);
    }
    
}
