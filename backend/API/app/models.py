#from app.meta import db
from config import db
# Employee Table
class Employee(db.Model):
    id = db.Column (db.Integer, primary_key=True)
    registration_id = db.Column(db.Integer)
    first_name = db.Column(db.String(15))
    middle_name = db.Column(db.String(15))
    last_name = db.Column(db.String(15))
    status = db.Column(db.String(15))
    father_husband_name = db.Column(db.String(15))
    gender = db.Column(db.String(15))
    birthdate = db.Column(db.Date)
    current_address1 = db.Column(db.VARCHAR(150))
    current_address2 = db.Column(db.VARCHAR(150))
    current_address3 = db.Column(db.VARCHAR(150))
    current_city = db.Column(db.VARCHAR(300))
    current_state = db.Column(db.VARCHAR(300))
    current_pin = db.Column(db.Integer)
    permanent_address1 = db.Column(db.VARCHAR(150))
    permanent_address2 = db.Column(db.VARCHAR(150))
    permanent_address3 = db.Column(db.VARCHAR(150))
    permanent_city = db.Column(db.VARCHAR(300))
    permanent_state = db.Column(db.VARCHAR(300))
    permanent_pin = db.Column(db.Integer)
    personal_email = db.Column(db.String(28))
    opcito_email = db.Column(db.String(28))
    contact = db.Column(db.String(10))
    user_id_number = db.Column(db.String(11))
    pan_number = db.Column(db.String(28))
    license_number = db.Column(db.String(28))
    emergency_contact_name1 = db.Column(db.String(28))
    emergency_contact_number1 = db.Column(db.String(10))
    emergency_contact_name2 = db.Column(db.String(28))
    emergency_contact_number2 =db.Column(db.String(10))
    password = db.Column(db.String(10))
    photo = db.Column(db.VARCHAR(25))
    Role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    created_by = db.Column(db.VARCHAR(15))
    created_date = db.Column(db.Date)
    updated_by = db.Column(db.VARCHAR(15))
    updated_date = db.Column(db.Date)

    def __init__(self,
                 id,
                 registration_id,
                 first_name,
                 middle_name,
                 last_name,
                 status,
                 father_husband_name,
                 gender,
                 birthdate,
                 current_address1,
                 current_address2,
                 current_address3,
                 current_state,
                 current_city,
                 current_pin,
                 permanent_address1,
                 permanent_address2,
                 permanent_address3,
                 permanent_state,
                 permanent_city,
                 permanent_pin,
                 personal_email,
                 opcito_email,
                 contact,
                 user_id_number,
                 pan_number,
                 license_number,
                 emergency_contact_name1,
                 emergency_contact_number1,
                 emergency_contact_name2,
                 emergency_contact_number2,
                 password,
                 photo,
                 Role_id,
                 created_by,
                 created_date
                 ):

        self.id = id
        self.registration_id = registration_id
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.status = status
        self.father_husband_name=father_husband_name
        self.gender=gender
        self.birthdate = birthdate
        self.current_address1 = current_address1
        self.current_address2 = current_address2
        self.current_address3 = current_address3
        self.current_state = current_state
        self.current_city = current_city
        self.current_pin = current_pin
        self.permanent_address1 = permanent_address1
        self.permanent_address2 = permanent_address2
        self.permanent_address3 = permanent_address3
        self.permanent_state = permanent_state
        self.permanent_city = permanent_city
        self.permanent_pin = permanent_pin
        self.personal_email = personal_email
        self.opcito_email = opcito_email
        self.contact = contact
        self.user_id_number = user_id_number
        self.pan_number = pan_number
        self.license_number = license_number
        self.emergency_contact_name1 = emergency_contact_name1
        self.emergency_contact_number1 = emergency_contact_number1
        self.emergency_contact_name2 = emergency_contact_name2
        self.emergency_contact_number2 = emergency_contact_number2
        self.photo = photo
        self.password = password
        self.Role_id = Role_id
        self.created_by = created_by
        self.created_date = created_date

# Role table
class Role(db.Model):
    id = db.Column (db.Integer,primary_key=True)
    role = db.Column (db.String(15))
    created_by = db.Column(db.VARCHAR(15))
    created_date = db.Column(db.Date)
    updated_by = db.Column(db.VARCHAR(15))
    updated_date = db.Column(db.Date)

    def __init__(self,id,role,created_by,created_date):
        self.id = id
        self.role = role
        self.created_by=created_by
        self.created_date=created_date

# Permission Table
class Permission (db.Model):
    id = db.Column(db.Integer,primary_key=True)
    permission = db.Column (db.String(15))
    detail = db.Column(db.VARCHAR(15))
    created_by = db.Column(db.VARCHAR(15))
    created_date = db.Column(db.Date)
    updated_by = db.Column(db.VARCHAR(15))
    updated_date = db.Column(db.Date)

    def __init__(self,id,permission,detail,created_by,created_date):
        self.id=id
        self.permission=permission
        self.detail=detail
        self.created_by = created_by
        self.created_date = created_date

# Role_Permission table
class Role_Permission(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    permission_id = db.Column(db.Integer, db.ForeignKey('permission.id'))

    def __init__(self,id,role_id,permission_id):
        self.id=id
        self.role_id = role_id
        self.permission_id = permission_id

# Employee_Role table
class Employee_Role(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        employee_id = db.Column(db.Integer, db.ForeignKey('employee.id'))
        role_id = db.Column(db.Integer, db.ForeignKey('role.id'))

        def __init__(self, id,employee_id ,role_id):
            self.id = id
            self.employee_id = employee_id
            self.role_id = role_id



# Leave_type table to store leave types
class Leave_type(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    leave_type = db.Column(db.VARCHAR(25))
    details = db.Column(db.VARCHAR(200))
    created_by = db.Column(db.VARCHAR(15))
    created_date = db.Column(db.Date)
    updated_by = db.Column(db.VARCHAR(15))
    updated_date = db.Column(db.Date)

    def __init__(self,id,leave_type,details,created_by,created_date):
        self.id=id
        self.leave_type = leave_type
        self.details = details
        self.created_by = created_by
        self.created_date = created_date

# Leaves table to store all Employees Leave Records
class Leaves (db.Model):
    id = db.Column(db.Integer,primary_key=True)
    reason = db.Column(db.VARCHAR(50))
    remark = db.Column(db.VARCHAR(50))
    from_date = db.Column(db.Date)
    to_date = db.Column(db.Date)
    total_days = db.Column(db.Integer)
    approval_person = db.Column(db.VARCHAR(25))
    approval_date = db.Column(db.Date)
    leave_type_id = db.Column(db.Integer, db.ForeignKey('leave_type.id'))
    status_id = db.Column(db.Integer, db.ForeignKey('status.id'))
    employee_id = db.Column(db.Integer, db.ForeignKey('employee.id'))
    created_by = db.Column(db.VARCHAR(15))
    created_date = db.Column(db.Date)
    updated_by = db.Column(db.VARCHAR(15))
    updated_date = db.Column(db.Date)

    def __init__(self,id,reason,remark,from_date,to_date,
                 total_days,
                 approval_person,
                 approval_date,
                 leave_type_id,
                 status_id,
                 employee_id,
                 created_by,
                 created_date,
                 ):
        self.id = id
        self.reason = reason
        self.remark = remark
        self.from_date =from_date
        self.to_date = to_date
        self.total_days = total_days
        self.approval_person = approval_person
        self.approval_date = approval_date
        self.leave_type_id = leave_type_id
        self.status_id = status_id
        self.employee_id=employee_id
        self.created_by=created_by
        self.created_date = created_date


# Status Table to store status
class Status (db.Model):
    id = db.Column(db.Integer,primary_key=True)
    status = db.Column(db.VARCHAR(20))

    def __init__(self,id,status):
        self.id=id
        self.status = status


# Total_leaves Table to record the leaves
class Total_leaves (db.Model):
    id = db.Column(db.Integer,primary_key=True)
    employee_id = db.Column(db.Integer, db.ForeignKey('employee.id'))
    total_leaves = db.Column(db.Integer)
    taken_leaves = db.Column(db.Integer)

    def __init__(self,id,employee_id,total_leaves,taken_leaves):
        self.id=id
        self.total_leaves = total_leaves
        self.taken_leaves = taken_leaves

db.create_all()
