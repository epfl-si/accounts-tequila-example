| Connector | Attributes      | Description                                                                                                             |
| --------- | ----------------| ----------------------------------------------------------------------------------------------------------------------- |
| LDAP      | `name`          | Family name                                                                                                             |
| LDAP      | `firstname`     | Given name                                                                                                              |
| LDAP      | `displayname`   | Given name + family name                                                                                                |
| LDAP      | `personaltitle` | Madame or Monsieur                                                                                                      |
| LDAP      | `statut`        | Statut in Accred context, possibles values are: <br>`Personnel`, `Etudiant`, `Hôte`, `Hors EPFL`, `Retraité`, `Externe` | 
| LDAP      | `classe`        | Classe in Accred context, possibles values are: <br>`Apprenti-e`, `Assistant-e`, `Auditeur`, `Chargés de cours`, `Corps professoral`, <br>`Doctorant`, `Etudiant exmatriculé`, `Futurs doctorants`, `Hors-Cadre`, <br>`Personnel scientifique`, `Personnel technique/administratif`, `Postgrade`, <br>`"Professeurs titulaires, boursiers, M.E.R"`, `Secrétaire ou Administrateur-trice`, <br>`Stagiaire`, `Voie Diplôme`       |
| LDAP      | `email`         | Email address                                                                                                           |
| LDAP      | `title`         | Fonction in Accred context                                                                                              |
| LDAP      | `title-en`      |                                                                                                                         |
| LDAP      | `unit`          | Person's unit acronym                                                                                                   |
| LDAP      | `unit-en`       |                                                                                                                         |
| LDAP      | `where`         | Unit hierarchy. The format is `labo`/`institut`/`faculté`/`organisation`/`CH`                                           |
| LDAP      | `wheres`        | Like 'where', but all units are given.                                                                                  |
| LDAP      | `office`        | office                                                                                                                  |
| LDAP      | `phone`         | Phone number                                                                                                            |
| LDAP      | `username`      | User name                                                                                                               |
| LDAP      | `uniqueid`      | Sciper number                                                                                                           |
| LDAP      | `unixid`        | Unix UID                                                                                                                |
| LDAP      | `groupid`       | List of group IDs the person belongs to                                                                                 |
| LDAP      | `org`           | Organisation. Possible values are:<br>• `epfl`: Persons accrédited at EPFL.<br>• `ehe`: Persons accredited in an EHE.<br>• `entreprises`: Persons accredited in an entreprise on site.<br>• `technique`: Persons accredited in a technical unit.<br>• `epfl-guests`: Persons managed in application guests.epfl.ch.<br>• `epfl-old`: Persons that left less than 6 month ago.                                      |
| LDAP      | `categorie`     | Possible values are: <br>`EPFL`, `EHE`, `ENTREPRISES`, `TECHNIQUE`, `EPFL-GUESTS`, `SHIBBOLETH`                         |
| LDAP      | `allunits`      | All acronyms of the person units                                                                                        |
| LDAP      | `unitid`        | Person's unit ID                                                                                                        |
| LDAP      | `cf`            | Accounting number of the unit                                                                                           |
| LDAP      | `allcfs`        | All accounting numbers of the person units                                                                              |
| LDAP      | `faculty`       | Faculty's unit acronym (f.i. STI)                                                                                       |
| LDAP      | `Institute`     | Institute's unit acronym (f.i. STI-SG)                                                                                  |
| LDAP      | `group`         | List of group names the person belongs to                                                                               |
| --        | --              | --                                                                                                                      |
| ACCRED    | `role-respadmin`                      | List of units where the person has role `respadmin`                      |
| ACCRED    | `role-respinfo`                       | List of units where the person has role `respinfo`                       |
| ACCRED    | `role-respinfra`                      | List of units where the person has role `respinfra`                      |
| ACCRED    | `role-respcomm`                       | List of units where the person has role `respcomm`                       |
| ACCRED    | `role-respsecu`                       | List of units where the person has role `respsecu`                       |
| ACCRED    | `role-respunit`                       | List of units where the person has role `respunit`                       |
| ACCRED    | `role-respcf1`                        | List of units where the person has role `respcf1`                        |
| ACCRED    | `role-respcf2`                        | List of units where the person has role `respcf2`                        |
| ACCRED    | `role-respcf3`                        | List of units where the person has role `respcf3`                        |
| ACCRED    | `role-respcf4`                        | List of units where the person has role `respcf4`                        |
| ACCRED    | `role-respcf5`                        | List of units where the person has role `respcf5`                        |
| ACCRED    | `role-respfinance`                    | List of units where the person has role `respfinance`                    |
| ACCRED    | `role-adjointsvp`                     | List of units where the person has role `adjointsvp`                     |
| ACCRED    | `role-regsigadmin`                    | List of units where the person has role `regsigadmin`                    |
| ACCRED    | `role-gestcf`                         | List of units where the person has role `gestcf`                         |
| ACCRED    | `role-membresgec`                     | List of units where the person has role `membresgec`                     |
| ACCRED    | `role-RespITEPFL`                     | List of units where the person has role `RespITEPFL`                     |
| ACCRED    | `role-RespITFaculte`                  | List of units where the person has role `RespITFaculte`                  |
| ACCRED    | `role-AdminIT`                        | List of units where the person has role `AdminIT`                        |
| ACCRED    | `role-DRH`                            | List of units where the person has role `DRH`                            |
| ACCRED    | `role-RRH`                            | List of units where the person has role `RRH`                            |
| ACCRED    | `role-Catalyse.SuperAdmin`            | List of units where the person has role `Catalyse.SuperAdmin`            |
| ACCRED    | `role-Chronos.SuperAdmin`             | List of units where the person has role `Chronos.SuperAdmin`             |
| ACCRED    | `role-Inventaire.SuperAdmin`          | List of units where the person has role `Inventaire.SuperAdmin`          |
| ACCRED    | `role-ndf.admin`                      | List of units where the person has role `ndf.admin`                      |
| ACCRED    | `role-coordinateur.recherche`         | List of units where the person has role `coordinateur.recherche`         |
| ACCRED    | `droit-accreditation`                 | List of units where the person has right `accreditation`                 |
| ACCRED    | `droit-adminroles`                    | List of units where the person has right `adminroles`                    |
| ACCRED    | `droit-admingaspar`                   | List of units where the person has right `admingaspar`                   |
| ACCRED    | `droit-distrilog`                     | List of units where the person has right `distrilog`                     |
| ACCRED    | `droit-arh`                           | List of units where the person has right `arh`                           |
| ACCRED    | `droit-sre`                           | List of units where the person has right `sre`                           |
| ACCRED    | `droit-admindiode`                    | List of units where the person has right `admindiode`                    |
| ACCRED    | `droit-demdetrav`                     | List of units where the person has right `demdetrav`                     |
| ACCRED    | `droit-cartevisite`                   | List of units where the person has right `cartevisite`                   |
| ACCRED    | `droit-gestionprofils`                | List of units where the person has right `gestionprofils`                |
| ACCRED    | `droit-smssmtp`                       | List of units where the person has right `smssmtp`                       |
| ACCRED    | `droit-intranet`                      | List of units where the person has right `intranet`                      |
| ACCRED    | `droit-controlesf`                    | List of units where the person has right `controlesf`                    |
| ACCRED    | `droit-payonline`                     | List of units where the person has right `payonline`                     |
| ACCRED    | `droit-adminad`                       | List of units where the person has right `adminad`                       |
| ACCRED    | `droit-demvm`                         | List of units where the person has right `demvm`                         |
| ACCRED    | `droit-substitutiondistrilog`         | List of units where the person has right `substitutiondistrilog`         |
| ACCRED    | `droit-confirmdistrilog`              | List of units where the person has right `confirmdistrilog`              |
| ACCRED    | `droit-ficheporte`                    | List of units where the person has right `ficheporte`                    |
| ACCRED    | `droit-validcdl`                      | List of units where the person has right `validcdl`                      |
| ACCRED    | `droit-gestfacility`                  | List of units where the person has right `gestfacility`                  |
| ACCRED    | `droit-remoteaccess`                  | List of units where the person has right `remoteaccess`                  |
| ACCRED    | `droit-safenetproxy`                  | List of units where the person has right `safenetproxy`                  |
| ACCRED    | `droit-gestionstockage`               | List of units where the person has right `gestionstockage`               |
| ACCRED    | `droit-fundadminroles`                | List of units where the person has right `fundadminroles`                |
| ACCRED    | `droit-sig2000000`                    | List of units where the person has right `sig2000000`                    |
| ACCRED    | `droit-sig500000`                     | List of units where the person has right `sig500000`                     |
| ACCRED    | `droit-sig100000`                     | List of units where the person has right `sig100000`                     |
| ACCRED    | `droit-sig50000`                      | List of units where the person has right `sig50000`                      |
| ACCRED    | `droit-sig5000`                       | List of units where the person has right `sig5000`                       |
| ACCRED    | `droit-sig0000`                       | List of units where the person has right `sig0000`                       |
| ACCRED    | `droit-WordPress.Admin`               | List of units where the person has right `WordPress.Admin`               |
| ACCRED    | `droit-WordPress.Editor`              | List of units where the person has right `WordPress.Editor`              |
| ACCRED    | `droit-Resp.IT.Manage`                | List of units where the person has right `Resp.IT.Manage`                |
| ACCRED    | `droit-Admin.IT.Manage`               | List of units where the person has right `Admin.IT.Manage`               |
| ACCRED    | `droit-Units.Read`                    | List of units where the person has right `Units.Read`                    |
| ACCRED    | `droit-Units.Write`                   | List of units where the person has right `Units.Write`                   |
| ACCRED    | `droit-Units.Limited.Write`           | List of units where the person has right `Units.Limited.Write`           |
| ACCRED    | `droit-Chronos.reporting`             | List of units where the person has right `Chronos.reporting`             |
| ACCRED    | `droit-Chronos.valid`                 | List of units where the person has right `Chronos.valid`                 |
| ACCRED    | `droit-Chronos.record`                | List of units where the person has right `Chronos.record`                |
| ACCRED    | `droit-ICRHBASE`                      | List of units where the person has right `ICRHBASE`                      |
| ACCRED    | `droit-ICRHSAL`                       | List of units where the person has right `ICRHSAL`                       |
| ACCRED    | `droit-ICRHDOT`                       | List of units where the person has right `ICRHDOT`                       |
| ACCRED    | `droit-ICRHDOC`                       | List of units where the person has right `ICRHDOC`                       |
| ACCRED    | `droit-ICRHPIHA`                      | List of units where the person has right `ICRHPIHA`                      |
| ACCRED    | `droit-ICRHAE`                        | List of units where the person has right `ICRHAE`                        |
| ACCRED    | `droit-WFRHMUT`                       | List of units where the person has right `WFRHMUT`                       |
| ACCRED    | `droit-WFRHSAL`                       | List of units where the person has right `WFRHSAL`                       |
| ACCRED    | `droit-RRH.manage`                    | List of units where the person has right `RRH.manage`                    |
| ACCRED    | `droit-RRH.deputies`                  | List of units where the person has right `RRH.deputies`                  |
| ACCRED    | `droit-gestcf.manage`                 | List of units where the person has right `gestcf.manage`                 |
| ACCRED    | `droit-gestcf.deputies`               | List of units where the person has right `gestcf.deputies`               |
| ACCRED    | `droit-respcfx.deputies`              | List of units where the person has right `respcfx.deputies`              |
| ACCRED    | `droit-DRH.deputies`                  | List of units where the person has right `DRH.deputies`                  |
| ACCRED    | `droit-Catalyse.ESRevueSV`            | List of units where the person has right `Catalyse.ESRevueSV`            |
| ACCRED    | `droit-Catalyse.ESRevueECO`           | List of units where the person has right `Catalyse.ESRevueECO`           |
| ACCRED    | `droit-Catalyse.ESRevueDABS`          | List of units where the person has right `Catalyse.ESRevueDABS`          |
| ACCRED    | `droit-Catalyse.AdminSecurite`        | List of units where the person has right `Catalyse.AdminSecurite`        |
| ACCRED    | `droit-Catalyse.AdminFinances`        | List of units where the person has right `Catalyse.AdminFinances`        |
| ACCRED    | `droit-Catalyse.DABSAdmin`            | List of units where the person has right `Catalyse.DABSAdmin`            |
| ACCRED    | `droit-Catalyse.Stockroom`            | List of units where the person has right `Catalyse.Stockroom`            |
| ACCRED    | `droit-Catalyse.Admin`                | List of units where the person has right `Catalyse.Admin`                |
| ACCRED    | `droit-Services.Admin`                | List of units where the person has right `Services.Admin`                |
| ACCRED    | `droit-ICRHBASE.SC`                   | List of units where the person has right `ICRHBASE.SC`                   |
| ACCRED    | `droit-ICRHSAL.SC`                    | List of units where the person has right `ICRHSAL.SC`                    |
| ACCRED    | `droit-Chronos.validz`                | List of units where the person has right `Chronos.validz`                |
| ACCRED    | `droit-Inventaire.Sortie`             | List of units where the person has right `Inventaire.Sortie`             |
| ACCRED    | `droit-Inventaire.super`              | List of units where the person has right `Inventaire.super`              |
| ACCRED    | `droit-Inventaire.resp`               | List of units where the person has right `Inventaire.resp`               |
| ACCRED    | `droit-Inventaire.Gestion`            | List of units where the person has right `Inventaire.Gestion`            |
| ACCRED    | `droit-Inventaire.User`               | List of units where the person has right `Inventaire.User`               |
| ACCRED    | `droit-Inventaire.Sortie.IT`          | List of units where the person has right `Inventaire.Sortie.IT`          |
| ACCRED    | `droit-Inventaire.Valid.IT`           | List of units where the person has right `Inventaire.Valid.IT`           |
| ACCRED    | `droit-Inventaire.AideGestion`        | List of units where the person has right `Inventaire.AideGestion`        |
| ACCRED    | `droit-ndf.validation`                | List of units where the person has right `ndf.validation`                |
| ACCRED    | `droit-ndf.travel.org`                | List of units where the person has right `ndf.travel.org`                |
| ACCRED    | `droit-Chronos.reporting.SC`          | List of units where the person has right `Chronos.reporting.SC`          |
| ACCRED    | `droit-ewa.tools.access`              | List of units where the person has right `ewa.tools.access`              |
| ACCRED    | `droit-railticket`                    | List of units where the person has right `railticket`                    |
| ACCRED    | `droit-CCC`                           | List of units where the person has right `CCC`                           |
| ACCRED    | `droit-ndf.report`                    | List of units where the person has right `ndf.report`                    |
| ACCRED    | `droit-coordinateur.recherche.manage` | List of units where the person has right `coordinateur.recherche.manage` |
| ACCRED    | `droit-ATELA.admin`                   | List of units where the person has right `ATELA.admin`                   |
| ACCRED    | `droit-ATELA.zones`                   | List of units where the person has right `ATELA.zones`                   |
| ACCRED    | `droit-Chronos.reporting.NR`          | List of units where the person has right `Chronos.reporting.NR`          |
| --        | --                                    | --                                                                       |
| CADI      | `camiprocardid` | Camipro card number                       |
| CADI      | `unitresp`      | Sciper number ot the unit's manager       |
| CADI      | `group`         | List of group names the person belongs to |
| --        | --              | --                                        |
| SCO       | `memberof` | List of group and unit IDs the person belongs to |