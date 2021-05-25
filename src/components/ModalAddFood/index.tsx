import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import Input from '../Input';

interface FoodFormData {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodFormData) => void;
}

export function ModalAddFood({isOpen, setIsOpen, handleAddFood}: ModalAddFoodProps) {
  const formRef = createRef();

  const handleSubmit = async (data: FoodFormData) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" icon="" placeholder="Cole o link aqui" />

        <Input name="name" icon="" placeholder="Ex: Moda Italiana" />
        <Input name="price" icon="" placeholder="Ex: 19.90" />

        <Input name="description" icon="" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
};

export default ModalAddFood;
