import contactModel from '../models/contacts.js';
import { UserDisplayName } from '../utils/index.js';


export function DisplayBusinessContactList(req, res, next){
    contactModel.find(function (error, businessContactCollection){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(businessContactCollection);

        res.render('index', {title: 'Business Contact List', 
            page: 'contacts/list', contacts : businessContactCollection,
                     displayName:UserDisplayName(req) })
    })
}


//C reate
export function DisplayBusinessContactAddPage(req, res, next){
    res.render('index', {title: 'Add business Contact', page: 'contacts/edit', businessContact: {},
     displayName:UserDisplayName(req) 
    })
}

export function ProcessBusinessContactAddPage(req, res, next){
    let newContact = contactModel({
        name: req.body.name,
        contact: req.body.contact,       
        email: req.body.email,
      
    });

    contactModel.create(newContact,function(error, businessContact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/Contacts-list');
    })
}

//U pdate
export function DisplayBusinessContactEditPage(req, res, next){

    let id = req.params.id;

    contactModel.findById(id, function(error, businessContact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.render('index', {title: 'Edit Contact List', page: 'contacts/edit', businessContact, 
        displayName:UserDisplayName(req) })

    })    
}

export function ProcessBusinessContactEditPage(req, res, next){
    let id = req.params.id;


    let editContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        contact: req.body.contact,       
        email: req.body.email,
    });

    contactModel.updateOne({_id: id}, editContact,function(error, businessContact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contacts-list');
    })
}


//D elete
export function ProcessBusinessContactDelete(req, res, next){
    let id = req.params.id

    contactModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contacts-list');
    })
}