import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const userSchema = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: true,
    },
    
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
    },
    fechaDeIngreso: {
        dia: {
            type: Number,

        },
        mes: {
            type: Number,

        },
        año: {
            type: Number,

        }
    }

});
/*
mongoosePaginate.paginate.options = {
    customLabels: {
        offset: false,
        page:"currentPage",
        pagingCounter:false,
        totalDocs:false
    }
}
productSchema.plugin(mongoosePaginate)
*/

const userModel = mongoose.model("users", userSchema);

export default userModel;